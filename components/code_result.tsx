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
    <View key={index} style={styles.container}>
      {/* Code Section */}
      <View style={styles.section}>
        <View style={styles.fileNameContainer}>
          <Text style={styles.fileNameText}>{fileName}</Text>
          <View style={styles.languageContainer}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.runButton}>
          <Text style={styles.runButtonText}>Run</Text>
        </TouchableOpacity>

        <View style={styles.codeContainer}>
          <SyntaxHighlighter
            language={language}
            style={monokai}
            wrapLongLines
            customStyle={styles.syntaxHighlighter}
          >
            {code?.join('\n')}
          </SyntaxHighlighter>
        </View>
      </View>

      {/* Result Section */}
      <View>
        <View style={styles.resultHeader}>
          <Text style={styles.resultText}>RESULT</Text>
        </View>

        <View style={styles.resultContainer}>
          <WebView
            source={{ html: code?.join('\n') }}
            style={styles.webView}
            injectedJavaScript={`
              document.body.style.color = 'white';
              document.body.style.fontSize = '28px';
            `}
          />
        </View>
      </View>
    </View>
  );
};

export default CodeResult;

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  section: {
    marginBottom: 10,
  },
  fileNameContainer: {
    width: '100%',
    height: 20,
    backgroundColor: '#0D121C',
    position: 'absolute',
    zIndex: 1,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  fileNameText: {
    color: '#fff',
  },
  languageContainer: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 10,
  },
  languageText: {
    color: '#fff',
    textAlign: 'center',
  },
  runButton: {
    position: 'absolute',
    zIndex: 1,
    right: 30,
    bottom: 30,
    width: '20%',
    height: 40,
    borderRadius: 12,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  runButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  codeContainer: {
    width: '97%',
    minHeight: 250,
    maxHeight: 400,
    borderRadius: 12,
    backgroundColor: '#1B2B34',
    paddingTop: 35,
    paddingBottom: 10,
    paddingLeft: 10,
    marginBottom: 10,
    position: 'relative',
    zIndex: 0,
  },
  syntaxHighlighter: {
    backgroundColor: '#1B2B34',
    width: '100%',
    wordWrap: 'break-word',
  },
  resultHeader: {
    width: '30%',
    backgroundColor: 'green',
    paddingVertical: 5,
    alignItems: 'center',
  },
  resultText: {
    color: '#fff',
    textAlign: 'center',
  },
  resultContainer: {
    width: '97%',
    height: 250,
    backgroundColor: '#22272E',
    paddingTop: 35,
    borderRadius: 12,
    paddingLeft: 5,
    marginBottom: 10,
    position: 'relative',
    zIndex: 0,
  },
  webView: {
    backgroundColor: '#22272E',
  },
});
