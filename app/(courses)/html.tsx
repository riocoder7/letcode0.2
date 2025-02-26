import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  View, Text, FlatList, TouchableOpacity, ScrollView, TextInput, Animated, TouchableWithoutFeedback, StyleSheet,
  Image
} from "react-native";
import { WebView } from "react-native-webview";
import course_data from "@/components/course_data.json";
import CodeResult from "@/components/code_result";

const CourseScreen = () => {
  // ✅ Get title from URL & normalize it
  const { title } = useLocalSearchParams();
  const normalizedTitle = typeof title === 'string' ? title.trim().toLowerCase() : "";

  // ✅ Find the matching course from the JSON file
  const selectedCourse = course_data.find(
    (course) => course.title.toLowerCase() === normalizedTitle
  );


  // ✅ Ensure we have a course, otherwise handle error
  if (!selectedCourse) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Course not found: {title}</Text>
      </View>
    );
  }

  // ✅ Set initial lesson (first lesson by default)
  const [selectedLesson, setSelectedLesson] = useState(selectedCourse&& selectedCourse.lessons[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [code, setCode] = useState(selectedLesson ? selectedLesson.example : "");
  const slideAnim = useState(new Animated.Value(-300))[0]; // Sidebar hidden initially

  // ✅ Toggle Sidebar Animation
  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: isMenuOpen ? -300 : 0, // Slide in/out
      duration: 300,
      useNativeDriver: false
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) toggleMenu();
  };

  const scrollViewRef = useRef<ScrollView>(null);
  const scrollToTop = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  // ✅ Change lesson and update the editor
  const changeLesson = (lesson: React.SetStateAction<{ id: number; images?:string; title: string; content: string; subTopics: ({ title: string; content: string; code_output: { code: string[]; fileName: string; language: string; size: number; }[]; } | { title: string; content: string; code_output: { code: string[]; fileName: string; language: string; }[]; } | { title: string; content: string; code_output?: undefined; })[]; example: string; }>) => {
    setSelectedLesson(lesson);
    setCode(lesson.example);
    closeMenu();
    scrollToTop();

    
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0D121C", paddingBottom: 10 }}>
      {/* ☰ Menu Button */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>☰ Menu</Text>
      </TouchableOpacity>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebar (Animated) */}
      <Animated.View style={[styles.sidebar, { left: slideAnim }]}>
        <FlatList
          data={selectedCourse.lessons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => changeLesson(item)} style={[
              styles.lessonItem, selectedLesson && selectedLesson.id === item.id && styles.selectedLesson
            ]}>
              <Text style={styles.lessonText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>

      {/* Main Content */}
      <ScrollView ref={scrollViewRef} style={styles.content}>
        {selectedLesson && (
          <>
          
            <Text style={styles.title}>{selectedLesson.title}</Text>
            <Image source={{uri:selectedCourse.images }} style={{width:"100%", height:200, borderRadius:12}} />
            <View style={styles.subTopicItem}>
              <Text style={styles.description}>{selectedLesson.content}</Text>
            </View>
          </>
        )}

                                                                                                                                                                                                                                                                                                                                                                                             
        {/* Sub-Topics Section */}
        {selectedLesson?.subTopics?.length > 0 && (
          <View style={styles.subTopicContainer}>                                                                                                                                                                                                                                                                                             
            {selectedLesson.subTopics.map((sub, index) => (
              <View key={index}>
                <Text style={styles.subTopicHeader}>{sub.title}</Text>
                <View style={styles.subTopicItem}>
                  <Text style={styles.subTopicContent}>{sub.content}</Text>
                </View>

                {/* Code and Result Section */}
                {sub.code_output && <CodeResult output={sub.code_output} index={index} />}
              </View>
            ))}
          </View>
        )}

        {/* Code Editor */}
        <Text style={styles.sectionTitle}>Try It Yourself:</Text>
        <TextInput
          style={styles.codeEditor}
          multiline
          value={code}
          onChangeText={setCode}
          editable
        />

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => { }} style={styles.runButton}>
            <Text style={styles.buttonText}>Run Code</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCode(selectedLesson.example)} style={styles.resetButton}>
            <Text style={styles.buttonText}>Reset Code</Text>
          </TouchableOpacity>
        </View>

        {/* Live Preview */}
        <WebView source={{ html: code }} style={styles.webView} />

        {/* Navigation Buttons */}
        <View style={styles.navigation}>
          {selectedLesson && selectedLesson.id > 1 && (
            <TouchableOpacity
              onPress={() => {
                changeLesson(course_data[0].lessons[selectedLesson.id - 2]);
                
              }}
              style={[styles.navButton, styles.previousButton]}>
              <Text style={styles.buttonText}>⬅️ Previous</Text>
            </TouchableOpacity>
          )}
          {selectedLesson && selectedLesson.id < course_data[0].lessons.length && (
            <TouchableOpacity
              onPress={() => {
                changeLesson(course_data[0].lessons[selectedLesson.id]);
                
              }}
              style={[styles.navButton, styles.nextButton]}>
              <Text style={styles.buttonText}>Next ➡️</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>

        
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: { padding: 15, backgroundColor: "#007BFF" },
  menuText: { color: "#fff", fontSize: 20 },
  overlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.5)" },
  sidebar: { position: "absolute", top: 0, bottom: 0, width: 300, backgroundColor: "#1E1E2E", padding: 10, zIndex: 10 },
  lessonItem: { padding: 10, backgroundColor: "#2D2D3A", marginBottom: 5, borderRadius: 5 },
  selectedLesson: { backgroundColor: "#007BFF" },
  lessonText: { color: "#99CC7D" },
  content: { flex: 1, padding: 15 },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 10, color: "#007BFF" },
  description: { fontSize: 16, lineHeight: 22, color: "#fff" },
  subTopicContainer: { marginBottom: 15, marginTop: 15 },
  subTopicHeader: { marginBottom: 20, fontWeight: "bold", fontSize: 20, color: "#99CC7D" },
  subTopicItem: { marginBottom: 50, paddingLeft: 10, borderLeftWidth: 2, borderColor: "#007BFF" },
  subTopicContent: { fontSize: 15, lineHeight: 25, color: "#fff" },
  sectionTitle: { fontWeight: "bold", marginTop: 10, color: "#fff" },
  codeEditor: { minHeight: 350, borderWidth: 1, borderRadius: 8, borderColor: "#aaa", padding: 10, fontSize: 16, color: "#fff", backgroundColor: "#2D2D3A", maxHeight: 450, borderLeftColor: "#007BFF" },
  buttonRow: { flexDirection: "row", marginBottom: 10, justifyContent: "space-between" },
  resetButton: { padding: 10, backgroundColor: "#DC3545", borderRadius: 5 },
  buttonText: { color: "#fff" },
  runButton: { padding: 10, backgroundColor: "#28A745", borderRadius: 5, marginLeft: 10 },
  webView: { height: 150, marginTop: 10, borderWidth: 1, borderColor: "#ccc" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 18, color: "red", fontWeight: "bold" },
  navigation: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center"
  },
  previousButton: {
    backgroundColor: "#007BFF",
    marginRight: 5
  },
  nextButton: {
    backgroundColor: "#28A745",
    marginLeft: 5
  }
});

export default CourseScreen;
