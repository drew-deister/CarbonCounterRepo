import React from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View} from "react-native";

const alps = 
  {
    latitude: 46.88,
    longitude: 9.65,
    latitudeDelta: 15,
    longitudeDelta: 15,
  }

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          location: alps,
        }
    }

    handleLocationChange = (newLocation) => {
        this.setState({ location: newLocation });
        //this.checkLocationsSeen;
    };

    //state = {  }
    render() { 
        return (  
            <View style={styles.mapContainer}>
                <MapView 
                    //style={styles.mapStyle}
                    //annotations={markers}
                    mapType='satellite'
                    customMapStyle={mapstyle}
                    initialRegion={alps}
                    region={this.state.location}
                    onRegionChange={this.handleLocationChange}
                />
            </View>
        )
    }
}

export default Map;

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 0,
      //height: DEVICE_HEIGHT,
      //width: DEVICE_WIDTH,
      borderColor: 'black',
      borderWidth: 1
    },
    mapContainer: {
      //flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: 300, //Dimensions.get('window').width,
      height: 400, //Dimensions.get('window').height,
    }
  });
 
