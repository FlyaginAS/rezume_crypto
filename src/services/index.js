class ApiService {
  _apiBase = `https://api.changenow.io/v1/`;
  _apiKey = `c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd`;

  _getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(
        `!!!Could not fetch ${url}, received ${res.status}`
      );
    }
    return await res.json();
  };

  getListCurrencies = async () => {
    const res = await this._getResource(`currencies?active=true`);
    return res;
  };

  getMinimalExchangeAmount = async (input, output) => {
    const res = await this._getResource(
      `min-amount/${input}_${output}?api_key=${this._apiKey}`
    );
    //todo if null throw error this pair is disabled now
    return res.minAmount;
  };

  getEstimatedExchangeAmount = async (input, output, val) => {
    const res = await this._getResource(
      `exchange-amount/${val}/${input}_${output}?api_key=${this._apiKey}`
    );
    //todo if null throw error this pair is disabled now
    return res.estimatedAmount;
  };
}

export default ApiService;
