import { Text, StyleSheet, } from 'react-native';

export default function TabTwoScreen() {
  return (
    <>
    <Text style={styles.title}>About</Text>
    <Text style={styles.content}>This coffee shop is the most metal coffee shop of all. Blacker than the blackest night times infinity.</Text>
    <Text style={styles.content}>Sponsored by Duncan Hills Coffee.</Text>
    </>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingTop: 20
  },
  content:{
    margin: 25,
    marginBottom: 0
  }
});