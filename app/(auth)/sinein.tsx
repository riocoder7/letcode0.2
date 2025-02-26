
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  useColorScheme,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const theme = useColorScheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);

  const [errors, setErrors] = useState({ email: '', password: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle login validation & authentication
  const handleLogin = async () => {
    let newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;
    setLoading(true)
    try {
       router.replace('/(tabs)/Home');
     
    } catch (error) {
      console.error("Error logging in:", (error as any).message);
      setLoading(false)
    }
  };

  return (
    <View style={[styles.container, theme === 'dark' && styles.containerDark]}>
      {/* Title */}
      <Text style={[styles.title, theme === 'dark' && styles.titleDark]}>Login</Text>

      {/* Email Input */}
      <View style={[styles.inputWrapper, theme === 'dark' && styles.inputWrapperDark]}>
        <Icon name="envelope" size={20} color={theme === 'dark' ? '#ddd' : '#555'} style={styles.leftIcon} />
        <TextInput
          style={[styles.input, theme === 'dark' && styles.inputDark]}
          placeholder="Email"
          placeholderTextColor={theme === 'dark' ? '#bbb' : '#aaa'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setErrors((prev) => ({ ...prev, email: '' }));
          }}
        />
      </View>
      {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}

      {/* Password Input */}
      <View style={[styles.inputWrapper, theme === 'dark' && styles.inputWrapperDark]}>
        <Icon name="lock" size={20} color={theme === 'dark' ? '#ddd' : '#555'} style={styles.leftIcon} />
        <TextInput
          style={[styles.input, theme === 'dark' && styles.inputDark]}
          placeholder="Password"
          placeholderTextColor={theme === 'dark' ? '#bbb' : '#aaa'}
          secureTextEntry={secureText}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors((prev) => ({ ...prev, password: '' }));
          }}
        />
        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
          <Icon
            name={secureText ? 'eye-slash' : 'eye'}
            size={20}
            color={theme === 'dark' ? '#ddd' : '#555'}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>
      {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={[styles.forgotPassword, theme === 'dark' && styles.forgotPasswordDark]}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={[styles.button, theme === 'dark' && styles.buttonDark]} onPress={handleLogin}>
        
        {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={[styles.buttonText, theme === 'dark' && styles.buttonTextDark]}>Login</Text>
       ) }
        
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={()=>(router.replace('/(auth)/sineup'))} style={styles.signupLink}>
        <Text style={[styles.signupText, theme === 'dark' && styles.signupTextDark]}>
          Don't have an account? <Text style={styles.signupTextBold}>Sign up</Text>
        </Text>
      </TouchableOpacity>

      {/* OR Separator */}
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={[styles.orText, theme === 'dark' && styles.orTextDark]}>or</Text>
        <View style={styles.line} />
      </View>

      {/* Google Login Button */}
      <TouchableOpacity style={[styles.googleButton, theme === 'dark' && styles.googleButtonDark]}>
        <Icon name="google" size={20} color={theme === 'dark' ? '#ddd' : '#333'} />
        <Text style={[styles.googleButtonText, theme === 'dark' && styles.googleButtonTextDark]}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  containerDark: {
    backgroundColor: '#121212', // Dark background
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  titleDark: {
    color: '#fff', // Dark theme title color
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputWrapperDark: {
    borderColor: '#555', // Dark theme input border color
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  inputDark: {
    color: '#fff', // Dark theme input text color
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    color: '#007bff',
    fontSize: 14,
    marginBottom: 20,
  },
  forgotPasswordDark: {
    color: '#1e90ff', // Dark theme forgot password color
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonDark: {
    backgroundColor: '#007bff', // Dark theme button color
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextDark: {
    color: '#fff', // Dark theme button text color
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#333',
    fontSize: 14,
  },
  orTextDark: {
    color: '#bbb', // Dark theme separator text color
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    borderRadius: 8,
  },
  googleButtonDark: {
    borderColor: '#555', // Dark theme google button border
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  googleButtonTextDark: {
    color: '#ddd', // Dark theme google button text color
  },
  signupLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signupText: {
    color: '#007bff',
    fontSize: 14,
  },
  signupTextDark: {
    color: '#1e90ff', // Dark theme signup link color
  },
  signupTextBold: {
    fontWeight: 'bold',
  },
});