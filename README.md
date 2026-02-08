# Brent Oil Price Change Point Analysis

## Overview
This project analyzes how major geopolitical, economic, and OPEC-related events affect Brent crude oil prices using Bayesian Change Point Analysis.

The analysis is conducted for **Birhan Energies**, with the goal of supporting:
- Investment decision-making
- Energy policy formulation
- Operational planning in volatile markets

## Data
- **Source:** Historical Brent oil prices
- **Frequency:** Daily
- **Period:** 1987–2022
- **Unit:** USD per barrel

## Methodology
- Exploratory Time Series Analysis
- Log-return transformation
- Bayesian Change Point Detection (PyMC)
- Event-based interpretation
- Interactive dashboard (Flask + React)

## Project Structure
Brent-Oil-ChangePoint-Analysis/
│
├── data/
│ ├── raw/
│ │ └── BrentOilPrices.csv
│ ├── external/
│ │ └── oil_market_events.csv
│ └── processed/
│ └── brent_returns.csv
│
├── notebooks/
│ ├── 01_data_understanding_eda.ipynb
│ ├── 02_bayesian_change_point_model.ipynb
│ ├── 03_event_impact_analysis.ipynb
│
├── src/
│ ├── data_loader.py
│ ├── diagnostics.py
│ └── utils.py
│
├── dashboard/
│ ├── backend/
│ │ ├── app.py
│ │ └── requirements.txt
│ └── frontend/
│ ├── package.json
│ └── src/
│ ├── components/
│ └── App.jsx
│
├── reports/
│ ├── figures/
│ └── brent_oil_change_point_report.pdf
│
├── README.md
└── requirements.txt 