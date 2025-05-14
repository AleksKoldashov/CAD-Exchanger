 export async function sendCallbackRequest(name: string) {
      try {
        const response = await fetch(
          "https://worl-test-callback.netlify.app/.netlify/functions/callback",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
            mode: "cors",
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Success:", data);
        return data;
      } catch (error) {
        console.error("Request failed:", error);
        throw error;
      }
    }