import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { screens } from "../../data/onboard";

const OnboardingScreen = () => {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const [currentScreen, setCurrentScreen] = useState(1);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      translateX.setValue(gestureState.dx);
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 50 && currentScreen > 1) {
        setCurrentScreen((prev) => prev - 1);
      } else if (gestureState.dx < -50 && currentScreen < screens.length) {
        setCurrentScreen((prev) => prev + 1);
      }
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    },
  });

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, currentScreen]);

  const current = screens.find((screen) => screen.id === currentScreen);

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center">
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          opacity: fadeAnim,
          transform: [{ translateX }],
        }}
        className={`${current.cardStyle} h-40 w-60 rounded-lg overflow-hidden mt-8`}
      >
        {current.hasImage && <View className="h-full w-full bg-gray-400" />}
      </Animated.View>
      <Text className="text-xl font-bold mt-8 text-center px-4">
        {current.title}
      </Text>
      <Text className="text-gray-500 text-center mt-2 px-6">
        {current.description}
      </Text>
      <TouchableOpacity
        className={`${
          currentScreen === 1 || currentScreen === 4
            ? "bg-black"
            : "bg-blue-500"
        } mt-10 px-8 py-4 rounded-full flex-row items-center justify-center`}
        onPress={() => {
          if (currentScreen < screens.length) {
            setCurrentScreen((prev) => prev + 1);
          } else {
            router.replace("/(auth)");
          }
        }}
      >
        <Text className="text-white text-lg mr-2">{current.buttonText}</Text>
        {currentScreen !== 1 && currentScreen !== 4 && (
          <Text className="text-white text-lg">→</Text>
        )}
      </TouchableOpacity>
      <View className="flex-row justify-center items-center mt-4">
        {screens.map((screen) => (
          <View
            key={screen.id}
            className={`h-2 w-8 mx-1 rounded-full ${
              screen.id === currentScreen ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
