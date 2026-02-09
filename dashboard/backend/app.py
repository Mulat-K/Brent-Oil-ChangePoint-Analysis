from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# -----------------------------
# Data Loading
# -----------------------------
PRICES_PATH = "../../data/raw/BrentOilPrices.csv"
RETURNS_PATH = "../../data/processed/brent_log_returns.csv"
EVENTS_PATH = "../../data/external/oil_market_events.csv"

prices_df = pd.read_csv(PRICES_PATH, parse_dates=["Date"])
returns_df = pd.read_csv(RETURNS_PATH, parse_dates=["Date"])
events_df = pd.read_csv(EVENTS_PATH, parse_dates=["date"])


# -----------------------------
# API Endpoints
# -----------------------------

@app.route("/api/prices", methods=["GET"])
def get_prices():
    data = prices_df[["Date", "Price"]].copy()
    data["Date"] = data["Date"].dt.strftime("%Y-%m-%d")
    return jsonify(data.to_dict(orient="records"))


@app.route("/api/returns", methods=["GET"])
def get_returns():
    data = returns_df[["Date", "log_return"]].copy()
    data["Date"] = data["Date"].dt.strftime("%Y-%m-%d")
    return jsonify(data.to_dict(orient="records"))


@app.route("/api/events", methods=["GET"])
def get_events():
    data = events_df.copy()
    data["date"] = data["date"].dt.strftime("%Y-%m-%d")
    return jsonify(data.to_dict(orient="records"))


@app.route("/api/change-point", methods=["GET"])
def get_change_point():
    """
    Static example – in practice, this can be loaded
    from saved PyMC inference results.
    """
    change_point_info = {
        "change_date": "2020-03-11",
        "description": "Detected structural break aligned with COVID-19 shock",
        "mu_before": -0.0004,
        "mu_after": 0.0012,
        "confidence": 0.95
    }
    return jsonify(change_point_info)


# -----------------------------
# App Runner
# -----------------------------
if __name__ == "__main__":
    app.run(debug=True)
