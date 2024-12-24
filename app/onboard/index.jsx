import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  PanResponder,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { screens } from "../../data/onboard";
import { useThemeColor } from "@/hooks/useThemeColor";
import { StatusBar } from "expo-status-bar";

const OnboardingScreen = () => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const onboardTextColor = useThemeColor({}, "onboardText");
  const onboardInactiveBarColor = useThemeColor({}, "InactiveBarOnboard");
  const onboardActiveBarColor = useThemeColor({}, "activeBarOnboard");
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
    <SafeAreaView
      className="flex-1 items-center justify-center"
      style={{ backgroundColor: backgroundColor }}
    >
      <StatusBar style="auto" />
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          opacity: fadeAnim,
          transform: [{ translateX }],
        }}
        className={`${current.cardStyle} h-40 w-60 rounded-lg overflow-hidden mt-8`}
      >
        {current.hasImage && current.imageSrc && (
          <View className="h-full w-full ">
            <Image
              source={current.imageSrc}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </View>
        )}
      </Animated.View>
      <Text
        className="text-2xl font-JakartaExtraBold mt-8 text-center px-4"
        style={{ color: textColor }}
      >
        {current.title}
      </Text>
      <Text
        className="text-gray-500 font-JakartaSemiBold text-center mt-2 px-6"
        style={{ color: onboardTextColor }}
      >
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
        <Text className="text-white font-JakartaSemiBold text-lg mr-2">
          {current.buttonText}
        </Text>
        {currentScreen !== 1 && currentScreen !== 4 && (
          <Text className="text-white font-JakartaSemiBold text-xl">→</Text>
        )}
      </TouchableOpacity>
      <View className="flex-row justify-center items-center mt-4">
        {screens.map((screen) => (
          <View
            key={screen.id}
            className={`h-2 w-8 mx-1 rounded-full `}
            style={{
              backgroundColor:
                screen.id === currentScreen
                  ? onboardActiveBarColor
                  : onboardInactiveBarColor,
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
