import {View, Text, StyleSheet,Image ,TouchableOpacity} from 'react-native';
import React from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from '../components/AssetExample';

export default function Screen01() {
  return (
     <View style={styles.container}>
      <Image
        source={require('../assets/vs_blue.png')} // Đường dẫn tới ảnh cục bộ
        style={styles.image}
      />
      <Text style={styles.textName}>
      Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      <View style={styles.danhgia}>
        <Image
        source={require('../assets/star.png')} // Đường dẫn tới ảnh cục bộ
        style={styles.imageStar1}
      />
        <Image
          source={require('../assets/star.png')} // Đường dẫn tới ảnh cục bộ
          style={styles.imageStarN}
        />
        <Image
          source={require('../assets/star.png')} // Đường dẫn tới ảnh cục bộ
          style={styles.imageStarN}
        />
        <Image
          source={require('../assets/star.png')} // Đường dẫn tới ảnh cục bộ
          style={styles.imageStarN}
        />
        <Image
          source={require('../assets/star.png')} // Đường dẫn tới ảnh cục bộ
          style={styles.imageStarN}
        />
        <Text style={{marginLeft:20}}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.danhgia}>
        <Text style={styles.textGia1}>1.790.000 đ</Text>
        <Text style={styles.textGia2}>1.790.000 đ</Text>
      </View>
      <View style={styles.danhgia}>
        <Text style={styles.textRed}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image
          source={require('../assets/Group1.png')} // Đường dẫn tới ảnh cục bộ
          style={{width:20,height:20,marginLeft:10}}
        />
      </View>
      <View style={styles.danhgia}>
        <View style={{borderRadius:10,borderWidth:1,borderColor:'silver',width:250,height:30,marginLeft:'auto',marginRight:'auto'}}>
          <TouchableOpacity style={styles.chonmau}>
            <Text style={{marginLeft:'25%',marginTop:5,}}>4 MÀU-CHỌN MÀU</Text>
            <Image
          source={require('../assets/Vector.png')} // Đường dẫn tới ảnh cục bộ
          style={{width:12,height:12,marginTop:8,marginLeft:'10%'}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.danhgia}>
        <View style={{borderRadius:10,borderWidth:1,borderColor:'silver',width:250,height:30,marginLeft:'auto',marginRight:'auto',backgroundColor:'red'}}>
          <TouchableOpacity style={styles.chonmau}>
            <Text style={{margin:'auto',marginTop:5,color:'white'}}>CHỌN MUA</Text>
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
  image: {
    width: 230,  // Độ rộng của ảnh
    height: 300, // Chiều cao của ảnh
    resizeMode: 'cover', // Cách thức hiển thị ảnh
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:20,
  },
  textGia1:{
    marginLeft:15,
    fontSize: 18,
    fontWeight:'bold',
  },
  textGia2: {
    marginLeft:'20%',
    marginTop:'auto',
    marginBottom:'auto',
    fontSize: 15,
    textDecorationLine: 'line-through', // Gạch ngang
  },
  textRed:{
    marginLeft:15,
    fontSize:13,
    fontWeight:'bold',
    color:'red',
  },
  imageStar1:{
    marginLeft:15,
    width:25,
    height:25,
  },
  imageStarN:{
    width:25,
    height:25,
  },
  textName:{
    marginTop:15,
    marginLeft:15,
  },
  chonmau:{
    flexDirection:'row',
  },
  danhgia:{
    marginTop:15,
    flexDirection:'row',
  },
});
