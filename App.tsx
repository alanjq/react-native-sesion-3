import React from 'react';
import {
  Button,
  // Importar Native modules
  NativeModules, SafeAreaView, View
} from 'react-native';


function App(): JSX.Element {
  
  const callCalendarModule = ()=> {
    // Llamamos el módulo personalizado
    const { CalendarModule } = NativeModules
    // Imprimimos el valor de la función getName
    console.log('Calendar module', CalendarModule.createCalendarEvent('a','b'));
  }

  return (
    <SafeAreaView>
      <View>
        <Button onPress={()=>callCalendarModule()} title="Crear evento de calendario" />
      </View>
    </SafeAreaView>
  );
}

export default App;
