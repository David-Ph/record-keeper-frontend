import axios from "axios";

const API = process.env.REACT_APP_API;

// Campaign
// //////////////////
export async function getJournals(params = "", token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API}/journal${params}`, config);

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}

// export async function addCampaign(data, token) {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await axios.post(`${API}/campaign`, data, config);

//     return response;
//   } catch (error) {
//     throw new Error(error.response.data.errors);
//   }
// }

// export async function editCampaign(campaignId, data, token) {
//   try {
//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };

//     const response = await axios.put(
//       `${API}/campaign/${campaignId}`,
//       data,
//       config
//     );

//     console.log(response);

//     return response;
//   } catch (error) {
//     throw new Error(error.response.data.errors);
//   }
// }

export async function deleteJournal(journalId, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(`${API}/journal/${journalId}`, config);

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}
