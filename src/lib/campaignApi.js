import axios from "axios";

const API = process.env.REACT_APP_API;

// Campaign
// //////////////////
export async function getCampaigns(params = "", token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API}/campaign${params}`, config);

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}

export async function getOneCampaign(campaignId, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(`${API}/campaign/${campaignId}`, config);

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}

export async function addCampaign(data, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.post(`${API}/campaign`, data, config);

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}

export async function editCampaign(campaignId, data, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.put(
      `${API}/campaign/${campaignId}`,
      data,
      config
    );

    console.log(response);

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}

export async function deleteCampaign(campaignId, token) {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.delete(
      `${API}/campaign/${campaignId}`,
      config
    );

    return response;
  } catch (error) {
    throw new Error(error.response.data.errors);
  }
}
