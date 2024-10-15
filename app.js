import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// קומפוננטות לסקשנים שונים
function AppointmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ניהול תורים</Text>
      {/* תוכן נוסף לניהול תורים */}
    </View>
  );
}

function PricingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>מחירון</Text>
      {/* תוכן נוסף למחירון */}
    </View>
  );
}

function PortfolioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>תיק עבודות</Text>
      {/* תוכן נוסף לתיק עבודות */}
    </View>
  );
}

function ScheduledAppointmentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>תורים שנקבעו</Text>
      {/* תוכן נוסף לתורים שנקבעו */}
    </View>
  );
}

// יצירת טאב בר תחתון לניווט בין סקשנים
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="תורים" component={AppointmentsScreen} />
        <Tab.Screen name="מחירון" component={PricingScreen} />
        <Tab.Screen name="תיק עבודות" component={PortfolioScreen} />
        <Tab.Screen name="תורים שנקבעו" component={ScheduledAppointmentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// סגנון
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
