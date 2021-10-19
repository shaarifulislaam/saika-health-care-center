import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-lg-6 col-md-6 col-sm-12 border border-1 border-gray rounded-2 shadow-sm">
          <div>
            <h3>Nutrition Stripped</h3>
            <p>
              Nutrition Stripped is a website founded by Registered Dietitian
              McKel Kooienga. She shares articles on trending nutrition topics
              using science to teach readers about popular food subjects and
              diet habits.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 border border-1 border-gray rounded-2 shadow-sm">
          <div>
            <h3>Well + Good</h3>
            <p>
              Well + Good is a wellness blog with articles on fitness,
              nutrition, beauty, and more. The journalism-based fitness site
              features interviews with fitness experts, practical fitness tips,
              and videos to walk blog readers through workouts.
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 border border-1 border-gray rounded-2 shadow-sm">
          <div>
            <h3>Bites of Wellness</h3>
            <p>
              Bites of Wellness founder Samantha Rowland is a personal trainer,
              nutrition coach, and fitness chef. Her site contains recipes for
              those with various diets, including gluten free, low carb, and
              dairy free. The site also contains workouts and wellness insights,
              such as how sleep relates to weight loss.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 border border-1 border-gray rounded-2 shadow-sm">
          <div>
            <h1>Healthline Nutrition</h1>
            <p>
              Health magazine’s nutrition section offers nutritionist-researched
              articles on foods, diets, and nutrition trends. Find the health
              benefits of certain ingredients, learn about the benefits and
              pitfalls of various diets, and get tips for eating healthy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
