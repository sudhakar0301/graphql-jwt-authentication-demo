//const { jwt } = require("jsonwebtoken");
//import jwt from "../public/index.html";

const PRIVATE_KEY = "Booking-Experience";

function IsJwtValid(jwtToken: any, secretKey: string) {
  try {
    // Verify and decode the JWT
    //const decoded = jwt.verify(jwtToken, secretKey);
    const decoded = parseJwt(jwtToken);
    console.log(decoded);

    // Check for expiration
    const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
    if (decoded.exp < currentTime) {
      return {
        valid: false,
        reason: "Token has expired",
      };
    }

    // Token is valid
    return {
      valid: true,
      payload: decoded,
    };
  } catch (error) {
    return {
      valid: false,
      reason: "Invalid token",
    };
  }
}

function parseJwt(token: any) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export function GenerateIdentityToken(token: any) {
  // Decode the original JWT
  const decodedOriginal = parseJwt(token);
  // Add additional claims to the payload
  const additionalClaims = {
    username: "Sudhakar",
    userId: "12345",
    role: "admin",
    // Add any other custom claims as needed
  };

  // Create a new JWT with the additional claims
  // const identityToken = jwt.sign(
  //   {
  //     ...decodedOriginal,
  //     ...additionalClaims,
  //     exp: Math.floor(Date.now() / 1000) + 3600,
  //   }, // Expire in 1 hour
  //   PRIVATE_KEY // Replace with your private key
  // );

  //console.log(identityToken);

  // Now, `identityToken` contains the identity token that you can use as needed.
}

export default IsJwtValid;
