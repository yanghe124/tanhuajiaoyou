import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    color: '#7d53ea'
  },
  focusCell: {
    borderColor: '#7d53ea',
  },
});

class App extends Component {
    state = { 
        vcodeText:""
    }

    onVcodeChangeText=(vcodeText)=>{
        this.setState({vcodeText})
    }
    render() {
        return (
              <CodeField
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={this.state.vcodeText}
                onChangeText={this.onVcodeChangeText}
                cellCount={6}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
          );
    }
}

export default App;