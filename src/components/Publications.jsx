import React from "react";

const Publications = () => {
    const publications = [
        {
            id: 1,
            title: "Leveraging Contextual Information for Effective Entity Salience Detection.",
            authors: [
                "Rajarshi Bhowmik",
                "Marco Ponza",
                "Atharva Tendle",
                "Anant Gupta",
                "Rebecca Jiang",
                "Xingyu Lu",
                "Qian Zhao",
                "Daniel Preotiuc-Pietro",
            ],
            venue: "NAACL 2024",
            pdfLink: "https://aclanthology.org/2024.findings-naacl.28.pdf",
            year: 2024,
        },
        {
            id: 2,
            title: "Self Supervised Learning in the Twilight of Noisy Real-World Datasets.",
            authors: [
                "Atharva Tendle",
                "Andrew Little",
                "Stephen Scott",
                "Mohammad Rashedul Hasan",
            ],
            venue: "ICMLA 2022",
            pdfLink: "https://ieeexplore.ieee.org/document/10069476",
            year: 2022,
        },
        {
            id: 3,
            title: "A study of the generalizability of self-supervised representations.",
            authors: ["Atharva Tendle", "Mohammad Rashedul Hasan"],
            venue: "Journal of Machine Learning with Applications",
            pdfLink:
                "https://www.sciencedirect.com/science/article/pii/S2666827021000621",
            year: 2021,
        },
        {
            id: 4,
            title: "Investigating Learning in Deep Neural Networks using Layer-Wise Weight Change.",
            authors: [
                "Ayush Manish Agrawal*",
                "Atharva Tendle*",
                "Harshvardhan D. Sikka",
                "Sahib Singh",
                "Amr Kayid",
            ],
            venue: "NeurIPS NewInML Workshop 2020",
            pdfLink: "https://arxiv.org/pdf/2011.06735.pdf",
            year: 2020,
        },
        {
            id: 5,
            title: "Multimodal Modular Meta-Learning.",
            authors: [
                "Harshvardhan D. Sikka",
                "Atharva A. Tendle",
                "Amr Kayid",
            ],
            venue: "NeurIPS Pre-Register Workshop 2020",
            pdfLink: "https://osf.io/6ek2b/download?format=pdf",
            year: 2020,
        },
        {
            id: 6,
            title: "Deep Learning Methods for Urban Analysis and Health Estimation of Obesity.",
            authors: [
                "David Newton",
                "Dan Piatkowski",
                "Wesley Marshall",
                "Atharva A. Tendle",
            ],
            venue: "Education and research in Computer Aided Architectural Design in Europe (eCAADe) 2020",
            pdfLink:
                "http://papers.cumincad.org/cgi-bin/works/BrowseTree=series=AZ/Show?ecaade2020_167",
            year: 2020,
        },
    ];

    // Group publications by year
    const publicationsByYear = publications.reduce((acc, pub) => {
        if (!acc[pub.year]) {
            acc[pub.year] = [];
        }
        acc[pub.year].push(pub);
        return acc;
    }, {});

    // Sort years in descending order
    const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);

    return (
        <section id="publications" className="publications-section">
            <div className="container">
                <h2 className="section-title">Publications</h2>
                <div className="publications-container">
                    {sortedYears.map((year) => (
                        <div key={year} className="publication-year-group">
                            <h3 className="year-heading">{year}</h3>
                            <div className="publications-list">
                                {publicationsByYear[year].map((publication) => (
                                    <div
                                        key={publication.id}
                                        className="publication-card"
                                    >
                                        <h4 className="publication-title">
                                            {publication.title}
                                        </h4>
                                        <p className="publication-authors">
                                            {publication.authors.map(
                                                (author, index) => (
                                                    <span
                                                        key={index}
                                                        className={
                                                            author.includes(
                                                                "Atharva"
                                                            )
                                                                ? "author-highlight"
                                                                : ""
                                                        }
                                                    >
                                                        {author}
                                                        {index <
                                                        publication.authors
                                                            .length -
                                                            1
                                                            ? ", "
                                                            : ""}
                                                    </span>
                                                )
                                            )}
                                        </p>
                                        <p className="publication-venue">
                                            {publication.venue}
                                        </p>
                                        <a
                                            href={publication.pdfLink}
                                            className="publication-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            [PDF]
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
