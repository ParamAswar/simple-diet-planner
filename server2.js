// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to calculate BMI and provide diet suggestions
app.post('/api/calculate-bmi', (req, res) => {
    const { weight, height, diabetes, diet } = req.body;
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let advice = "";
    let suggestion = "";

    if (bmi < 18.5) {
        advice = "Underweight - Increase calorie intake.";
        suggestion = diet === "veg" ? 
            (diabetes === "yes" ? "Smoothie with spinach, banana, almond butter, and almond milk. Lunch: Lentil curry with brown rice. Dinner: Grilled paneer with vegetables." : "Poha with vegetables and nuts. Lunch: Dal, rice, salad with ghee. Dinner: Chapati with vegetables and whole milk.")
            : (diabetes === "yes" ? "Omelet with vegetables. Lunch: Grilled chicken with sweet potato. Dinner: Baked salmon with quinoa." : "Scrambled eggs with cheese. Lunch: Grilled chicken with mashed potatoes. Dinner: Fish curry with rice.");
    } else if (bmi < 24.9) {
        advice = "Healthy weight - Maintain your diet.";
        suggestion = diet === "veg" ? 
            (diabetes === "yes" ? "Vegetable upma. Lunch: Chickpea salad. Dinner: Grilled tofu with spinach and brown rice." : "Oatmeal with fruits and nuts. Lunch: Quinoa salad with vegetables. Dinner: Lentil soup with bread.")
            : (diabetes === "yes" ? "Boiled eggs with spinach. Lunch: Grilled fish with vegetables. Dinner: Chicken stir-fry with zucchini noodles." : "Scrambled eggs with avocado toast. Lunch: Grilled chicken with quinoa. Dinner: Baked salmon with asparagus.");
    } else {
        advice = "Overweight - Reduce calorie intake.";
        suggestion = diet === "veg" ? 
            (diabetes === "yes" ? "Vegetable salad with boiled egg. Lunch: Chickpea curry with quinoa. Dinner: Stir-fried vegetables with lentils." : "Smoothie with spinach, banana, and almond milk. Lunch: Vegetable soup with brown rice. Dinner: Grilled tofu with vegetables.")
            : (diabetes === "yes" ? "Boiled eggs with spinach. Lunch: Grilled fish with vegetables. Dinner: Chicken stir-fry with zucchini noodles." : "Greek yogurt with nuts. Lunch: Grilled chicken salad. Dinner: Baked salmon with asparagus.");
    }

    res.json({ bmi, advice, suggestion });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});