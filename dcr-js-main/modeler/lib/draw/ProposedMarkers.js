import { attr as svgAttr, create as svgCreate } from 'tiny-svg';

export function conditionMarker(marker, path, fill) {
  svgAttr(path, {
    markerEnd: marker('proposed-condition-flow-end', fill, '#FF9800'),   
    markerStart: marker('proposed-condition-flow-start', '#FF9800', '#FF9800'),
    stroke: '#FF9800',   //yellow
  });
}

export function responseMarker(marker, path, fill) {
  svgAttr(path, {
    markerStart: marker('proposed-response-flow-start', '#039BE5', '#039BE5'),
    markerEnd: marker('proposed-response-flow-end', fill, '#039BE5'),   
    stroke: '#039BE5',   //blue
  });
}

export function includeMarker(marker, path, fill) {
  svgAttr(path, {
    markerStart: marker('proposed-include-flow-start', '#4CAF50', '#4CAF50'),
    markerEnd: marker('proposed-include-flow-end', fill, '#4CAF50'),    
    stroke: '#4CAF50'   //green
  });
}

export function excludeMarker(marker, path, fill) {
  svgAttr(path, {
    markerStart: marker('proposed-exclude-flow-start', 'red', 'red'),
    markerEnd: marker('proposed-exclude-flow-end', fill, 'red'),   
    stroke: 'red'   //red
  });
}

export function milestoneMarker(marker, path, fill) {
  svgAttr(path, {
    markerEnd: marker('proposed-milestone-flow-end', fill, '#8E24AA'),   //'#8E24AA', '#8E24AA'),
    markerStart: marker('proposed-milestone-flow-start', fill, '#8E24AA'),
    stroke: '#8E24AA'   //purple
  });
}


export function spawnMarker(marker, path, fill) {
  svgAttr(path, {
    markerEnd: marker('proposed-spawn-flow-end', '#4D6180', '#4D6180'), 
    markerStart: marker('proposed-spawn-flow-start', '#4D6180', '#4D6180'),
    stroke: '#4D6180'   
  });
}


//Create the proposed markers


export function createMarker(addMarker, id, type, fill, stroke) {

  if (type === 'proposed-response-flow-end') {
    var responseflowEnd = svgCreate('path');
    svgAttr(responseflowEnd, {

      d: 'M 19.26,10.00 C 19.26,15.11 15.11,19.26 10.00,19.26 4.89,19.26 0.74,15.11 0.74,10.00 0.74,'+
      '4.89 4.89,0.74 10.00,0.74 15.11,0.74 19.26,4.89 19.26,10.00 Z M 8.27,15.26 C 8.27,14.26 9.02,'+
      '13.45 9.94,13.45 10.87,13.45 11.61,14.26 11.61,15.26 11.61,16.26 10.87,17.07 9.94,17.07 9.02,'+
      '17.07 8.27,16.26 8.27,15.26 8.27,15.26 8.27,15.26 8.27,15.26 Z M 8.43,4.40 C 8.43,4.35 8.43,'+
      '4.29 8.43,4.23 8.43,3.33 9.10,2.59 9.94,2.59 10.77,2.59 11.45,3.33 11.45,4.23 11.45,4.29 11.45,'+
      '4.35 11.44,4.40 11.44,4.40 10.86,10.74 10.86,10.74 10.81,11.25 10.42,11.64 9.94,11.64 9.46,'+
      '11.64 9.07,11.25 9.02,10.75 9.02,10.75 8.43,4.40 8.43,4.40 Z',

    });

    addMarker(id, {
      element: responseflowEnd,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt',
      },
      ref: { x: 21, y: 10 },
      scale: 0.45,
    });
  }

  if (type === 'proposed-response-flow-start') {
    var responseflowStart = svgCreate('path');
    svgAttr(responseflowStart, {

      d: 'M 1 5 L 11 10 L 1 15 Z'

    });

    addMarker(id, {
      element: responseflowStart,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 0, y: 10 },
      scale: 0.65,
    });
  }

  if (type === 'proposed-exclude-flow-end') {
    var excludeflowEnd = svgCreate('path');
    svgAttr(excludeflowEnd, {

      d: 'M 16.64,10.63 C 16.64,10.95 16.46,11.24 16.24,11.24 16.24,11.24 4.29,11.24 4.29,'+
      '11.24 4.08,11.24 3.89,10.95 3.89,10.63 3.89,10.63 3.89,9.42 3.89,9.42 3.89,9.09 4.08,'+
      '8.81 4.29,8.81 4.29,8.81 16.24,8.81 16.24,8.81 16.46,8.81 16.64,9.09 16.64,9.42 16.64,'+
      '9.42 16.64,10.63 16.64,10.63 Z M 19.26,10.00 C 19.26,15.11 15.11,19.26 10.00,19.26 4.89,'+
      '19.26 0.74,15.11 0.74,10.00 0.74,4.89 4.89,0.74 10.00,0.74 15.11,0.74 19.26,4.89 19.26,10.00 Z',

    });

    addMarker(id, {
      element: excludeflowEnd,
      scale: 0.4,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt',
      },
      ref: { x: 21, y: 8.8 },
    });
  }

  if (type === 'proposed-exclude-flow-start') {
    var excludeflowStart = svgCreate('path');
    svgAttr(excludeflowStart, {

      d: 'M 1 5 L 11 10 L 1 15 Z',

    });

    addMarker(id, {
      element: excludeflowStart,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 0, y: 10 },
      scale: 0.6,
    });
  }

  if (type === 'proposed-include-flow-end') {
    var includeflowEnd = svgCreate('path');
    svgAttr(includeflowEnd, {

      d: 'M 14.33,9.43 C 14.33,9.43 10.59,9.43 10.59,9.43 10.59,9.43 10.59,5.68 10.59,5.68 10.59,'+
      '5.34 10.31,5.06 9.97,5.06 9.62,5.06 9.34,5.34 9.34,5.68 9.34,5.68 9.34,9.43 9.34,9.43 9.34,'+
      '9.43 5.61,9.43 5.61,9.43 5.26,9.43 4.99,9.70 4.99,10.05 4.99,10.39 5.26,10.67 5.61,10.67 5.61,'+
      '10.67 9.34,10.67 9.34,10.67 9.34,10.67 9.34,14.42 9.34,14.42 9.34,14.76 9.62,15.04 9.97,'+
      '15.04 10.31,15.04 10.59,14.76 10.59,14.42 10.59,14.42 10.59,10.67 10.59,10.67 10.59,10.67 14.33,'+
      '10.67 14.33,10.67 14.67,10.67 14.95,10.39 14.95,10.05 14.95,9.70 14.67,9.43 14.33,9.43 14.33,'+
      '9.43 14.33,9.43 14.33,9.43 Z M 19.26,10.00 C 19.26,15.11 15.11,19.26 10.00,19.26 4.89,19.26 0.74,'+
      '15.11 0.74,10.00 0.74,4.89 4.89,0.74 10.00,0.74 15.11,0.74 19.26,4.89 19.26,10.00 Z',

    });

    addMarker(id, {
      element: includeflowEnd,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 21, y: 10 },
      scale: 0.45,
    });
  }

  if (type === 'proposed-include-flow-start') {
    var includeflowStart = svgCreate('path');
    svgAttr(includeflowStart, {

      d: 'M 1 5 L 11 10 L 1 15 Z',

    });

    addMarker(id, {
      element: includeflowStart,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 0, y: 10 },
      scale: 0.65,
    });
  }

  if (type === 'proposed-condition-flow-end') {
    var conditionflowEnd = svgCreate('path');
    svgAttr(conditionflowEnd, {

      d: 'M 5.57,11.87 C 4.49,11.87 3.61,11.00 3.61,9.91 3.61,8.83 4.49,7.95 5.57,7.95 6.65,7.95 7.52,'+
      '8.83 7.52,9.91 7.52,11.00 6.65,11.87 5.57,11.87M 16.81,9.42 C 16.81,9.42 8.46,9.42 8.46,9.42 8.23,'+
      '8.03 7.02,6.97 5.57,6.97 3.95,6.97 2.63,8.29 2.63,9.91 2.63,11.54 3.95,12.85 5.57,12.85 7.02,'+
      '12.85 8.23,11.80 8.46,10.40 8.46,10.40 12.90,10.40 12.90,10.40 12.90,10.40 12.90,12.36 12.90,'+
      '12.36 12.90,12.63 13.12,12.85 13.39,12.85 13.66,12.85 13.88,12.63 13.88,12.36 13.88,12.36 13.88,'+
      '10.40 13.88,10.40 13.88,10.40 15.35,10.40 15.35,10.40 15.35,10.40 15.35,11.38 15.35,11.38 15.35,'+
      '11.65 15.57,11.87 15.84,11.87 16.11,11.87 16.33,11.65 16.33,11.38 16.33,11.38 16.33,10.40 16.33,'+
      '10.40 16.33,10.40 16.81,10.40 16.81,10.40 17.08,10.40 17.30,10.18 17.30,9.91 17.30,9.64 17.08,'+
      '9.42 16.81,9.42M 19.26,10.00 C 19.26,15.11 15.11,19.26 10.00,19.26 4.89,19.26 0.74,15.11 0.74,'+
      '10.00 0.74,4.89 4.89,0.74 10.00,0.74 15.11,0.74 19.26,4.89 19.26,10.00 Z'

    });

    addMarker(id, {
      element: conditionflowEnd,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
        
      },
      ref: { x: 21, y: 10 },
      scale: 0.45,
    });
  }

  if (type === 'proposed-condition-flow-start') {
    var includeflowStart = svgCreate('path');
    svgAttr(includeflowStart, {

      d: 'M 1 5 L 11 10 L 1 15 Z',

    });

    addMarker(id, {
      element: includeflowStart,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 0, y: 10 },
      scale: 0.65,
    });
  }

  if (type === 'proposed-milestone-flow-end') {
    var milestoneflowEnd = svgCreate('path');
    svgAttr(milestoneflowEnd, {

      d: 'M 5.57,11.87 C 4.49,11.87 3.61,11.00 3.61,9.91 3.61,8.83 4.49,7.95 5.57,7.95 6.65,7.95 7.52,'+
      '8.83 7.52,9.91 7.52,11.00 6.65,11.87 5.57,11.87M 16.81,9.42 C 16.81,9.42 8.46,9.42 8.46,9.42 8.23,'+
      '8.03 7.02,6.97 5.57,6.97 3.95,6.97 2.63,8.29 2.63,9.91 2.63,11.54 3.95,12.85 5.57,12.85 7.02,'+
      '12.85 8.23,11.80 8.46,10.40 8.46,10.40 12.90,10.40 12.90,10.40 12.90,10.40 12.90,12.36 12.90,'+
      '12.36 12.90,12.63 13.12,12.85 13.39,12.85 13.66,12.85 13.88,12.63 13.88,12.36 13.88,12.36 13.88,'+
      '10.40 13.88,10.40 13.88,10.40 15.35,10.40 15.35,10.40 15.35,10.40 15.35,11.38 15.35,11.38 15.35,'+
      '11.65 15.57,11.87 15.84,11.87 16.11,11.87 16.33,11.65 16.33,11.38 16.33,11.38 16.33,10.40 16.33,'+
      '10.40 16.33,10.40 16.81,10.40 16.81,10.40 17.08,10.40 17.30,10.18 17.30,9.91 17.30,9.64 17.08,9.42 16.81,'+
      '9.42M 19.26,10.00 C 19.26,15.11 15.11,19.26 10.00,19.26 4.89,19.26 0.74,15.11 0.74,10.00 0.74,'+
      '4.89 4.89,0.74 10.00,0.74 15.11,0.74 19.26,4.89 19.26,10.00 Z'


    });

    addMarker(id, {
      element: milestoneflowEnd,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 21, y: 10 },
      scale: 0.45,
    });
  }

  if (type === 'proposed-milestone-flow-start') {
    var milestoneflowStart = svgCreate('path');
    svgAttr(milestoneflowStart, {

      d: 'M 0.68,19.94 C 0.68,19.94 0.70,10.50 0.70,10.50 0.70,10.50 0.72,1.07 0.72,1.07 0.72,1.07 9.69,'+
      '5.80 9.69,5.80 9.69,5.80 18.65,10.54 18.65,10.54 18.65,10.54 9.66,15.24 9.66,15.24 9.66,15.24 0.68,'+
      '19.94 0.68,19.94 Z M 4.46,13.56 C 4.46,13.56 4.46,13.56 4.46,13.56 4.46,12.90 4.95,12.37 5.55,'+
      '12.37 6.14,12.37 6.63,12.90 6.63,13.56 6.63,13.56 6.63,13.56 6.63,13.56 6.63,14.22 6.14,14.75 5.55,'+
      '14.75 4.95,14.75 4.46,14.22 4.46,13.56 4.46,13.56 4.46,13.56 4.46,13.56 Z M 4.57,6.42 C 4.56,6.38 4.56,'+
      '6.35 4.56,6.31 4.56,5.71 5.00,5.23 5.54,5.23 6.09,5.23 6.52,5.71 6.52,6.31 6.52,6.35 6.52,6.38 6.52,'+
      '6.42 6.52,6.42 6.14,10.59 6.14,10.59 6.11,10.92 5.85,11.18 5.54,11.18 5.23,11.18 4.98,10.92 4.95,'+
      '10.59 4.95,10.59 4.57,6.42 4.57,6.42 Z',

    });

    addMarker(id, {
      element: milestoneflowStart,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 0, y: 10.5 },
      scale: 0.45,
    });
  }

  if (type === 'proposed-spawn-flow-end') {
    var spawnflowEnd = svgCreate('path');
    svgAttr(spawnflowEnd, {

      d: 'M 13.85,5.21 C 14.23,5.49 14.60,5.34 14.67,4.87 14.67,4.87 14.98,2.83 14.98,2.83 15.06,2.35 15.17,'+
      '2.35 15.24,2.83 15.24,2.83 15.55,4.87 15.55,4.87 15.63,5.34 16.00,5.49 16.38,5.21 16.38,5.21 18.13,'+
      '3.92 18.13,3.92 18.51,3.64 18.60,3.73 18.32,4.11 18.32,4.11 17.04,5.89 17.04,5.89 16.77,6.27 16.92,'+
      '6.65 17.39,6.72 17.39,6.72 19.40,7.03 19.40,7.03 19.87,7.11 19.87,7.22 19.40,7.30 19.40,7.30 17.39,'+
      '7.61 17.39,7.61 16.92,7.68 16.77,8.06 17.04,8.44 17.04,8.44 18.32,10.22 18.32,10.22 18.60,10.60 18.51,'+
      '10.69 18.13,10.41 18.13,10.41 16.38,9.12 16.38,9.12 16.00,8.84 15.63,8.99 15.55,9.46 15.55,9.46 15.24,'+
      '11.50 15.24,11.50 15.17,11.98 15.06,11.98 14.98,11.50 14.98,11.50 14.67,9.46 14.67,9.46 14.60,8.99 14.23,'+
      '8.84 13.85,9.12 13.85,9.12 12.10,10.41 12.10,10.41 11.72,10.69 11.65,10.61 11.94,10.24 11.94,10.24 13.39,'+
      '8.42 13.39,8.42 13.69,8.05 13.55,7.69 13.08,7.62 13.08,7.62 10.78,7.30 10.78,7.30 10.32,7.24 10.32,7.12 10.78,'+
      '7.05 10.78,7.05 12.84,6.72 12.84,6.72 13.31,6.65 13.46,6.27 13.19,5.89 13.19,5.89 11.91,4.11 11.91,4.11 11.63,'+
      '3.73 11.72,3.64 12.10,3.92 12.10,3.92 13.85,5.21 13.85,5.21 Z M 10.60,7.18 C 10.60,7.18 5.30,9.56 5.30,9.56 5.30,'+
      '9.56 -0.00,11.94 -0.00,11.94 -0.00,11.94 0.01,7.16 0.01,7.16 0.01,7.16 0.03,2.37 0.03,2.37 0.03,2.37 5.31,'+
      '4.77 5.31,4.77 5.31,4.77 10.60,7.18 10.60,7.18 Z',

    });

    addMarker(id, {
      element: spawnflowEnd,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 21.2, y: 7.2 },
      scale: 0.6,
    });
  }


  if (type === 'proposed-spawn-flow-start') {
    var includeflowStart = svgCreate('path');
    svgAttr(includeflowStart, {

      d: 'M 1 5 L 11 10 L 1 15 Z',

    });

    addMarker(id, {
      element: includeflowStart,
      attrs: {
        fill: fill,
        stroke: stroke,
        strokeLinecap: 'butt'
      },
      ref: { x: 0, y: 10 },
      scale: 0.65,
    });
  }

}