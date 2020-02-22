// Shirom Makkad 

import {Dimensions} from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const diagonal = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

const diagonalScale = size => (size / 100) * diagonal;

export {diagonalScale};