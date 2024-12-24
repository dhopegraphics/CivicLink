import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View className="flex-1 items-center justify-center px-5 bg-white">
      {/* Logo */}
      <Image
        source={{ uri: "https://example.com/logo.png" }}
        className="w-12 h-12 mb-2"
      />

      {/* Tagline */}
      <Text className="text-lg font-semibold text-gray-800 mb-8">
        Work without limits
      </Text>

      {/* Email Input */}
      <View className="flex-row items-center w-full border-b border-gray-300 mb-5">
        <TextInput
          className="flex-1 h-10 text-base"
          placeholder="Your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <View className="mb-4 pl-3 self-start w-full">
        <TextInput className="font-JakartaSemiBold text-lg">
          Choose a password
        </TextInput>
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
      <View className="mb-4 pl-3 self-start w-full">
        <TextInput className="font-JakartaSemiBold text-lg">
          Repeat the password
        </TextInput>
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
      <TouchableOpacity className="bg-gray-200 py-3 w-full items-center rounded mb-4">
        <Text className="text-base text-gray-600">Continue</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text className="text-sm text-gray-600 mb-4">or</Text>

      {/* Sign up with Google */}
      <TouchableOpacity className=" border border-gray-300 py-3 w-full rounded mb-3">
        <View className="flex-row  items-center self-center justify-center">
          <AntDesign name="google" size={20} color="black" className="mr-3" />
          <Text className="text-lg font-JakartaSemiBold text-gray-800">
            Sign up with Google
          </Text>
        </View>
      </TouchableOpacity>

      {/* Sign up with Apple */}
      <TouchableOpacity className="border border-gray-300 py-3  w-full rounded">
        <View className="flex-row items-center self-center justify-center">
          <FontAwesome name="apple" size={24} color="black" className="mr-3" />
          <Text className="text-lg font-JakartaSemiBold text-gray-800">
            Sign up with Apple
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
