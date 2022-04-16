1. How long did you spend on the coding assignmen?
**Around 1 and a half to 2 days**

1a. What would you add to your solution if you had more time?
**Lots of things I could improve: regarding the Open Library API, I'd look into using isbn to query the book so I wouldn't need to query for the cover images multiple times to get different sized images for responsiveness. I'd look into querying for the details such as cover image once user clicks on the book details for more optimized querying. Look into better UI experiences/feedback when data is being fetched such as adding spinners for loading states (currently it feels like the books aren't being fetched while they load)**

1b. If you didn&#39;t spend much time on the coding test, then use this as an opportunity to
explain what you would add.
**See above**

2. What was the most useful feature that was added to the latest version of your chosen
language? Please include a snippet of code that shows how you&#39;ve used it.
**React hooks is pretty new and there are a lot of useful features such as useMemo used for optimization. The expensive function would not be recalculated if the dependency doesn't change**
```
 const sum = useMemo(() => expensiveSumFunction(a, b), [a, b]);
```

3. How would you track down a performance issue in production? Have you ever had to do this?
**I was part of a team that worked on optimizing production code that was having SEO performance issues. Page speed was a great resource in checking on the issues causing a low performance score**

4. How would you improve the API that you just used?
**One thing that I could think of would be to make the structure more flat such as including the cover images in the initial query instead of having to do a second query to get them**


5. Please describe yourself using correctly formatted JSON.
```
{
    "name": "ailey",
    "role": "developer",
    "descriptions": ["organized", "great at communication", "cooperative", "diligent"]
}
```
