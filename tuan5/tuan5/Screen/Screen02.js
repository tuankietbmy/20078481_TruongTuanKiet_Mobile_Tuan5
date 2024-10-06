import {View, Text, StyleSheet,Image ,TouchableOpacity} from 'react-native';
import React from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function Screen02() {
  return (
     <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Image
        source={require('../assets/vs_blue.png')} // Đường dẫn tới ảnh cục bộ
        style={styles.image}
          />
          <View style={{margin:20}}>
             <Text>Điện Thoaị Vsmart Joy 3</Text>
             <Text>Hàng chính hãng</Text>
          </View>
        </View>
        <View style={{flex:1,backgroundColor:'silver',marginTop:20,}}>
          <Text style={{margin:10,fontSize:15}}>Chọn 1 màu bên dưới</Text>
          <View style={{alignSelf:'center'}}>
            <TouchableOpacity>
              <Image
        source={require('../assets/Rectangle4.png')} // Đường dẫn tới ảnh cục bộ
        style={{width:80,height:80}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
        source={require('../assets/Rectangle5.png')} // Đường dẫn tới ảnh cục bộ
        style={{width:80,height:80}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
        source={require('../assets/Rectangle6.png')} // Đường dẫn tới ảnh cục bộ
        style={{width:80,height:80}}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
        source={require('../assets/Rectangle7.png')} // Đường dẫn tới ảnh cục bộ
        style={{width:80,height:80}}
              />
            </TouchableOpacity>
            
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    marginTop:10,
    marginLeft:10,
    width:100,
    height:120,
  }
});
