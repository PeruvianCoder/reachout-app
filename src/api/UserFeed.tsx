import React from "react";

export default function GetUserFeed() {
  return fetch("TestPayload.json")
    .then((response) => response.json())
    .then((json) => {
      return json.user;
    })
    .catch((error) => {
      console.error(error);
    });
}
