import AsyncStorage from "@react-native-community/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(`${this.namespace}:token`);
  }

  async setAccessToken(token) {
    return AsyncStorage.setItem(`${this.namespace}:token`, token);
  }

  async removeAccessToken() {
    return AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
