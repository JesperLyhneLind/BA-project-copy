import CommandStack from "diagram-js/lib/command/CommandStack";
import ElementRegistry from "diagram-js/lib/core/ElementRegistry";
import { is } from "../../util/ModelUtil";
import EventBus from "diagram-js/lib/core/EventBus";

const defaultSettings = {
  useNewFlowIcons: false
};

/**
 * DCR specific keyboard bindings.
 *
 * @param {CommandStack} commandStack
 * @param {EventBus} eventBus
 */
export default function DCRSettings(commandStack, eventBus) {
  this.settings = { ...defaultSettings };

  this.get = (key) => {
    return this.settings[key];
  };

  this.set = (key, value) => {
    commandStack.execute('settings.update', {
      settings: this.settings,
      key,
      value
    });
  };

  // Hook existing buttons into the settings
  const flowAppearanceButton = document.getElementById('js-toggle-flow-appearance');
  flowAppearanceButton?.addEventListener('click', () => {
    this.set('useNewFlowIcons', !this.get('useNewFlowIcons'));
  });

  eventBus.on(['commandStack.postExecute', 'commandStack.reverted'], (event) => {
    if (event.command === 'settings.update') {
      const { key, value } = event.context;
      if (key === 'useNewFlowIcons') {
        if (this.get('useNewFlowIcons')) {
          flowAppearanceButton?.classList.add('button-active');
        } else {
          flowAppearanceButton?.classList.remove('button-active');
        }
      }
    }
  });

  commandStack.registerHandler('settings.update', UpdateSettingsHandler);
}

DCRSettings.$inject = [
  'commandStack',
  'eventBus'
];

/**
 * @param {ElementRegistry} elementRegistry 
 */
function UpdateSettingsHandler(elementRegistry) {
  this._elementRegistry = elementRegistry;
}
UpdateSettingsHandler.$inject = [
  'elementRegistry'
];

UpdateSettingsHandler.prototype.execute = function (context) {
  context.oldValue = context.settings[context.key];
  context.settings[context.key] = context.value;

  return this._elementRegistry.filter(function (element) {
    return is(element, 'dcr:Relation');
  });
};

UpdateSettingsHandler.prototype.revert = function (context) {
  context.settings[context.key] = context.oldValue;

  return this._elementRegistry.filter(function (element) {
    return is(element, 'dcr:Relation');
  });
};