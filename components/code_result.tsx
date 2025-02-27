import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';
// @ts-ignore
import SyntaxHighlighter from 'react-native-syntax-highlighter';
// @ts-ignore
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Output {
  fileName: string;
  language: string;
  code: string[];
}

interface CodeResultProps {
  index: number;
  output: Output[];
}

const CodeResult: React.FC<CodeResultProps> = ({ index, output }) => {
  const { fileName, language, code } = output[0] || {};

  return (
    <View key={index} style={{ marginBottom: 30, }}>

      <View style={{ marginBottom: 10 }}>
        <View style={styles.fileName}>
          <View style={{ width: '70%', paddingLeft: 10 }}> <Text style={{ color: "#fff" }}>{output[0].fileName}</Text></View>
          <View style={{ width: '30%', backgroundColor: "#007BFF", }}> <Text style={{ textAlign: "center", color: "#fff" }}>{output[0]?.language}</Text></View>
        </View>

        <TouchableOpacity style={{ position: 'absolute', zIndex: 1, right: 30, bottom: 30, width: '20%', height: 40, borderRadius: 12, backgroundColor: "green" }}><Text style={{ textAlign: "center", color: "#fff" }}> Run</Text></TouchableOpacity>
        <View style={{ width: '97%', minHeight: 250, maxHeight: 400, borderRadius: 12, backgroundColor: '#1B2B34', paddingTop: 35, paddingBottom: 10, paddingLeft: 10, marginBottom: 10, position: "relative", zIndex: 0 }}>
         
          <SyntaxHighlighter
            language={output[0]?.language}
            style={monokai}
            wrapLongLines={false} 
           
            customStyle={{
              backgroundColor: '#1B2B34',
              width: "100%",
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word'
            }}
            
          >
            {output[0]?.code.join('\n')}
          </SyntaxHighlighter>

        </View>


      </View>

      <View>
        <View style={styles.fileName}>
          <View style={{ width: '30%', backgroundColor: "green", }}> <Text style={{ textAlign: "center", color: "#fff", }}> RESULT</Text></View>
        </View>


        <View style={{ width: '97%', height: 250, backgroundColor: '#22272E', paddingTop: 35, overflow: 'hidden', borderRadius: 12, paddingLeft: 5, marginBottom: 10, position: "relative", zIndex: 0 }}>

          <WebView 
          source={{ html: output[0]?.code.join('\n') }} 
          style={{ fontSize: 30, backgroundColor: "#22272E" }}
         injectedJavaScript={`
          
        document.body.style.color = "white";
        document.body.style.fontSize = "28px";
        
            `} />



        </View>

      </View>
    </View>
  )
}

export default CodeResult

const styles = StyleSheet.create({
  fileName:{
    width: '100%',
    height: 20, 
    backgroundColor: "#0D121C", 
    position: "absolute", 
    zIndex: 1, 
    marginTop: 10, 
    flexDirection: "row", 
    justifyContent: "flex-end" 
  },

})