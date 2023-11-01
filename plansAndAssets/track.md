Oct 17th, 2023

I started this journey looking to make a simple inventory tracker, dice roller, and Adventurer's Journal for my first tabletop RPG. It has become more than that in such a short time. On friday I started building out just a simple character. Yesterday I continued that route, before adding so many new features that I needed to take it back to the board. 

I spent yesterday figuring out the user flow, today as I am wireframing I have decided to move the name generation to the final step, before finalizing your character.

Today I have been working on a digital flowchart to help me get page layouts. This is leading to hours of research regarding fantasy races, skills, and abilities I have never worked with before, the variables are going to be overwhelming and I am wondering if Redux may be a better way to manage state, however, I am leaning towards context. Overall, I am glad I took it back to the board, before coding out a big mistake. 

The pages are going to be far more work than I realized. retrieving information about a single race is going to take 4 or 5 different api calls. I understand that is better than having to design the entire DB myself, but we'll see. Will need to spend a lot of time working on graphQL schemas, types.

DnD beyond is exactly what I was trying to build only better. I am going to replan. 

10/25/2023

I have been unable to work on this for a few days and it has left me wanting. It has weighed on my thoughts heavily. I have decided to make 4 primary pages, and a fifth button to take users to less used information. 

These sections include 
- Character
    - Abilities, Saves, Senses
        - These will double as buttons, when pushed will supply a die roll, and factor in modifyers
- Journal
    - A Note taking page, allowing users to save a string, with a date, to keep track of the story as it stands
- Equipment
    - A list of the characters equipment, each item being selectable, to load more information about that item
- Actions & Spells
    - a list of spells and actions available to the user, based on previosly selected items
        - needs a link to a page to add a new spell, or action
- More
    - Skills
    - Features & Traits
    - Proficiencies & languages
    - Description / Backstory


10/31/2023

Finished the layout of the character page. Need to start the journal. 

    Journal
        - Adventure Log
            - A journal to keep track of the characters thoughts and keep track of the campaign so far
        - Locations
            - A section to keep track of the places visited. 
        - Quests
            - Track quest objectives


