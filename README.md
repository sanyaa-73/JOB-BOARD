# Job Finder 🙌 - Simple Web-Based Job Board

This is a simple, static web application designed to demonstrate basic HTML, CSS, and JavaScript skills by simulating a Job Board website. Users can browse job listings, search for specific roles, view job details, apply for a job, and employers can post new jobs via a dashboard.

## 🚀 Features

* **Homepage (`index.html`):** Quick search functionality for jobs (by title and location) and a list of featured available jobs.
* **Job Listings (`jobs.html`):** A dedicated page listing all available job positions.
* **Job Details (e.g., `job-details.html`):** Specific pages for each job, showing the role, company, location, description, and an application form.
* **Employer Dashboard (`employer.html`):** A form for employers to "post" a new job, which then displays the entered information (client-side only).
* **Interactive Forms:** Application forms and the employer post form use JavaScript to prevent page reload and show a success message upon submission.
* **Client-Side Search:** The homepage search feature uses JavaScript to match the input title and location against a predefined list of jobs.

## 📁 Project Structure

The project is structured with separate files for different sections of the website:

| File Name | Description |
| :--- | :--- |
| `index.html` | The main landing page with the job search feature. |
| `jobs.html` | The complete list of available job postings. |
| `job-details.html` | Details page for **Frontend Developer**. |
| `job-details2.html` | Details page for **Backend Developer**. |
| `job-details3.html` | Details page for **Data Analyst**. |
| `employer.html` | The Employer Dashboard for posting jobs. |
| `style.css` | (Presumed) The stylesheet for all pages. |
| `backend.jpg` | Image for the Backend Developer job. |
| `dataanalyst.jpg` | Image for the Data Analyst job. |
| `frontend2.jpg` | Image for the Frontend Developer job. |

## ⚙️ Technologies Used

* **HTML5:** For the structure and content.
* **CSS3:** For styling (linked via `style.css`).
* **JavaScript (ES6):** For form handling, client-side job search, and interactive success messages.

## 💻 Setup and Usage

This is a static site and does not require any backend server or complex configuration.

1.  **Clone the repository:**
    ```bash
    git clone [Your-GitHub-Repository-URL]
    ```
2.  **Open the files:**
    Navigate to the project directory and open `index.html` in your preferred web browser.

    ```bash
    cd job-finder
    open index.html 
    # or start your local server if needed
    ```

## 🔍 How the Search Works

The job search on `index.html` is implemented with a JavaScript function that listens for a form submission:

1.  It collects the values from the **Job Title** and **Location** input fields.
2.  It compares these values (converted to lowercase and trimmed) against a hardcoded `jobs` array in the script.
3.  If a match is found (using `Array.prototype.find()` and `String.prototype.includes()`), the user is redirected to the corresponding job's detail page (`foundJob.url`).
4.  If no match is found, an `alert` message is displayed: "Job not found. Please check title and location."

### Example Search Matches:

| Search Title | Search Location | Result |
| :--- | :--- | :--- |
| `front` | `remote` | Match (`job-details.html`) |
| `backend` | `bengaluru` | Match (`job-details2.html`) |
| `data` | `mumbai` | Match (`job-details3.html`) |

## 🌟 Future Improvements

* Implement a persistent storage solution (e.g., JSON server, Firebase) for job data instead of hardcoding it in JavaScript.
* Dynamically generate job listings on `jobs.html` from a data source.
* Refine the search logic to handle partial location matches more robustly.
* Add client-side validation for application forms.
* Improve CSS/mobile responsiveness.

---
**Made with ❤️ and Code**
