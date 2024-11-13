import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { SIZES, COLORS } from "../../../constants";
import { PopulsrJobCard } from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const isLoading = false;
  const router = useRouter();
  const error = false;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View styles={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>An error occurred</Text>
        ) : (
          <FlatList />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
