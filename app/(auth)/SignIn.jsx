import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import ThirdPartyAuthBtn from "@/components/ThirdPartyAuthButton";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  const theme = useColorScheme({}, "theme"); // Detect the current theme
  const isDarkMode = theme === "dark"; // Determine if it's dark mode

  const logo = isDarkMode
    ? require("@/assets/images/CivicLinkAppLogoLight.png")
    : require("@/assets/images/CivicLinkAppLogo.png");

  return (
    <View style={{ backgroundColor: backgroundColor, flex: 1, padding: 8 }}>
      <View className="justify-center self-center">
        <Image
          source={logo}
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
          }}
        />
      </View>

      <View className="mb-4 pl-3 self-start w-full">
        <Text
          className="font-JakartaSemiBold text-lg"
          style={{ color: textColor }}
        >
          Your email address
        </Text>
      </View>
      <View className="flex-row items-center w-full h-14 border rounded-2xl border-cyan-200 mb-5">
        <TextInput
          className="flex-1 ml-4 font-JakartaSemiBold h-10 text-base"
          placeholder="diactive@gmail.com"
          placeholderTextColor={"gray"}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View className="mb-4 pl-3 self-start w-full">
        <Text
          className="font-JakartaSemiBold text-lg"
          style={{ color: textColor }}
        >
          Enter Your Password
        </Text>
      </View>

      {/* Password Input */}
      <View className="flex-row h-14 items-center justify-between border rounded-3xl border-cyan-200 w-full mb-5">
        <TextInput
          className="flex-1 ml-4 mb-1 items-center  font-JakartaSemiBold h-10 text-base"
          placeholder="min. 8 characters"
          secureTextEntry={secureTextEntry}
          placeholderTextColor={"gray"}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          className="p-2  mr-3"
        >
          <Feather
            name={secureTextEntry ? "eye-off" : "eye"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={() => router.replace("/(main)/(tabs)")}
        className="bg-gray-200 py-3 w-full items-center rounded-3xl mb-4"
      >
        <Text className="text-lg font-JakartaSemiBold text-gray-600">
          Continue
        </Text>
      </TouchableOpacity>

      {/* Divider */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
        <Text
          className="text-lg font-JakartaSemiBold text-gray-600 mx-4"
          style={{
            color: textColor,
          }}
        >
          or
        </Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#D1D5DB" }} />
      </View>

      {/* Sign up with Google */}
      <ThirdPartyAuthBtn
        onPress={() => console.log("Sign up with Google Clicked")}
        TextButton={"Sign in with Google"}
        iconName={"google"}
      />

      {/* Sign up with Apple */}
      <ThirdPartyAuthBtn
        onPress={() => console.log("Sign up with Apple Clicked")}
        TextButton={"Sign In with Apple"}
        iconName={"apple"}
      />
    </View>
  );
};

export default signIn;
