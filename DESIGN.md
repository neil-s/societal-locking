# Product and design exercise

## Introduction

At Societal, we are dedicated to addressing critical issues in the justice system, specifically guardianship abuse. An essential part of our mission is to improve the tools used by legal professionals and court staff to manage guardianship cases efficiently and securely.

One of the challenges we are tackling is enabling multiple users — specifically attorneys and guardians — to collaborate on the same accounting documents within a guardianship case. This involves ensuring data integrity and preventing conflicts when both parties need to access and edit these documents.

Please read the PRD below, and provide your guidance on the product and technical questions below it.

## Product Requirements Document (PRD)

**Feature Name:** Collaborative Editing for Accounting Documents

- An accounting document can be thought of as a multi-page form. Some of the pages of the form might include:
     - A list of assets the guardian manages
     - A list of transactions within their bank account
     - The budget they were trying to keep their expenses within
- Multiple users (guardians or lawyers) might all have edit rights to the document.
- If they happen to edit the document at the same time, how can we prevent conflicting changes?

## **Options**

### Option A: Locking
When one user opens a document for editing, prevent other users from opening it. 

### Option B: Concurrent edits
Let multiple users make edits in real-time. 

### **Constraints and Values:**

- We're currently focused on getting the MVP live as soon as possible
- Assume about 1000 documents, most of which have 2 editors. The lawyer will usually make most of the edits, but may ask their client (the fiduciary), via phone or email, to fill in some details that the attorney doesn't have. 
---

### Your Assignment

Please provide guidance on the following questions with about 1 - 2 paragraphs each. Feel free to list any additional questions you would ask the subject-matter expert to clarify before you would plan the engineering design.

(Double click to edit this md file)

**Question 1**

For the Concurrent Edits option, what user experience patterns would you use to show the user that others have made edits to their document?

*Your answer here*

**Question 2**

If you were to use the locking mechanism, how would you implement it? What data structures, algorithms and/or technologies would you use?

*Your answer here*

**Question 3**

Which of the two options would you pick - locking or concurrent editing? What are the pros, cons and tradeoffs? Please list any assumptions you're making, and simplifications or improvements you would make to those options.

*Your answer here*

**Question 4**

What metrics and events would you log for this feature? Why?

*Your answer here*


**Question 5**

Any other questions you would ask the subject-matter expert before deciding on an engineering design?

*Your answer here*
