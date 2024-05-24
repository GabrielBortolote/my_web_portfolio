// This file implement utilities for NeonFlickAndPulseEffect componets

export function insertDarkPoint(darkPoints, lightPoints, point){
  if (point > 0 && point < 100 && !darkPoints.includes(point) && !lightPoints.includes(point)){
    darkPoints.push(point)
  }
}

export function numbers2keyframes(numberList){
  return numberList.map((item) => `${item}%`).join(', ')
}
