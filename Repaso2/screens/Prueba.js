import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import BottomSheet, { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const { width, height } = Dimensions.get('window');

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ['25%', '50%'];

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
    setModalVisible(true);
  };

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePresentModalPress}
        >
          <Text style={styles.buttonText}>Mostrar Modal</Text>
        </TouchableOpacity>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onDismiss={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¡Hola! Soy un modal.</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => bottomSheetModalRef.current?.dismiss()}
            >
              <Text style={styles.textStyle}>Ocultar Modal</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0088f0',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    backgroundColor:'#0088f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonClose: {
    backgroundColor: 'red',
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CustomModal;
