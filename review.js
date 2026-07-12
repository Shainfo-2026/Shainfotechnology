    import { db } from "./firebase.js";

    import {
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy
    } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("reviewList");

    /* =========================
    SUBMIT REVIEW
    ========================= */

    reviewForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const rating = Number(document.getElementById("rating").value);

    const review = document.getElementById("review").value.trim();

    try {

        await addDoc(collection(db, "reviews"), {

        name,

        email,

        rating,

        review,

        status: "pending",

        createdAt: new Date()

        });

        alert("Thank you! Your review has been submitted and is awaiting approval.");

        reviewForm.reset();

    } catch (error) {

        console.error(error);

        alert("Failed to submit review.");

    }

    });


    /* =========================
    LOAD APPROVED REVIEWS
    ========================= */

    async function loadReviews() {

    reviewList.innerHTML = "";

    try {

        const q = query(

        collection(db, "reviews"),

        where("status", "==", "approved"),

        orderBy("createdAt", "desc")

        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {

        reviewList.innerHTML = `

        <div style="color:white;text-align:center;font-size:18px;">
        No reviews yet.
        </div>

        `;

        return;

        }

        querySnapshot.forEach((doc) => {

        const data = doc.data();

        let stars = "";

        for (let i = 0; i < data.rating; i++) {

            stars += "★";

        }

        reviewList.innerHTML += `

        <div class="review-card">

            <div class="review-header">

                <div class="review-name">
                    ${data.name}
                </div>

                <div class="review-stars">
                    ${stars}
                </div>

            </div>

            <div class="review-text">

                ${data.review}

            </div>

        </div>

        `;

        });

    } catch (error) {

        console.error(error);

    }

    }

    loadReviews();