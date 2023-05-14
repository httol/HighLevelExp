import { Button } from "react-native";
import * as Updates from "expo-updates";

export default function CheckUpdates() {
  async function handleCheck() {
    try {
      const update = await Updates.checkForUpdateAsync();
      console.log(update);
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest Expo update: ${error}`);
    }
  }

  return <Button onPress={handleCheck} title="Check updates" />;
}
