import plotly.graph_objects as go
import json

# Data from the provided JSON
data = {"skills": [{"Skill": "AI-Powered Cybersecurity", "Growth_Rate": 185}, {"Skill": "Cloud Security (AWS/Azure/GCP)", "Growth_Rate": 156}, {"Skill": "Zero Trust Architecture", "Growth_Rate": 143}, {"Skill": "Penetration Testing & Red Teaming", "Growth_Rate": 127}, {"Skill": "Incident Response & Digital Forensics", "Growth_Rate": 118}, {"Skill": "DevSecOps & Application Security", "Growth_Rate": 112}, {"Skill": "IoT & Embedded Security", "Growth_Rate": 98}]}

# Extract skills and growth rates
skills = [item['Skill'] for item in data['skills']]
growth_rates = [item['Growth_Rate'] for item in data['skills']]

# Improve skill names while staying within 15 character limit
improved_skills = [
    "AI Cybersecurity",
    "Cloud Security", 
    "Zero Trust Arch",
    "Pen Test & Red",
    "Incident Resp",
    "DevSecOps",
    "IoT Security"
]

# Use modern blues and oranges color scheme
blue_orange_colors = ['#1FB8CD', '#FFC185', '#5D878F', '#D2BA4C', '#1FB8CD', '#FFC185', '#5D878F']

# Create horizontal bar chart
fig = go.Figure(go.Bar(
    x=growth_rates,
    y=improved_skills,
    orientation='h',
    marker_color=blue_orange_colors[:len(skills)],
    hovertemplate='<b>%{y}</b><br>Growth Rate: %{x}%<extra></extra>',
    cliponaxis=False
))

# Update layout with professional formatting
fig.update_layout(
    title="Cybersecurity Skills Growth Rate - 2025",
    xaxis_title="Growth Rate %",
    yaxis_title="Skills"
)

# Save the chart
fig.write_image("cybersecurity_skills_growth.png")