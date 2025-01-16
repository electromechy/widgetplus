import axios from 'axios';

/**
 * Send a personalized welcome message.
 * @param roomId - The Matrix room ID.
 * @param userId - The Matrix user ID.
 */
export const sendWelcomeMessage = async (roomId: string, userId: string) => {
  const endpoint = `https://synapse.textrp.io/_matrix/client/r0/rooms/${roomId}/send/m.room.message`;
  const accessToken = 'TOKEN'; // Replace with a secure method to retrieve this.

  try {
    await axios.post(
      endpoint,
      {
        msgtype: 'm.text',
        body: `Welcome to IMUTV.tv, ${userId}!`,
      },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
  } catch (error) {
    console.error('Error sending welcome message:', error);
  }
};
