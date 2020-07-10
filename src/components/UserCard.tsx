import React, { useState } from "react";
import { View } from "react-native";

export default function UserCard() {
  const [userID, setUserID] = useState<string | undefined>(undefined);
  const [userName, setUserName] = useState<string | undefined>(undefined);

  return (
    <View style={{ flex: 2, flexDirection: "row" }}>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Regular header</h4>
              <p class="category">Category subtitle</p>
            </div>
            <div class="card-coin">
              <div class="image"></div>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </div>
          </div>
        </div>
      </div>
    </View>
  );
}
