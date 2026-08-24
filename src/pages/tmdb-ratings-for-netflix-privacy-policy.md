---
layout: ../layouts/Page.astro
title: "TMDB Ratings for Netflix Privacy Policy"
description: "Privacy policy for the TMDB Ratings for Netflix Chrome extension."
---

**Effective Date:** 8th February, 2025  
**Last Updated:** 9th March, 2025

## **1\. Introduction**

Thank you for using **TMDB Ratings for Netflix**! This Chrome extension enhances your Netflix experience by displaying ratings from The Movie Database (TMDB) directly on Netflix pages.

We respect your privacy and are committed to protecting any information that you provide. This Privacy Policy outlines what data we collect, how we use it, and how we protect your information.

## **2\. Information We Collect**

This extension **does not collect, store, or share any personal information**. However, it does access and use the following data for its functionality:

- **Netflix Page Content**: The extension reads the currently viewed Netflix title to retrieve and display relevant TMDB ratings.

- **User-Provided TMDB API Key**: If you enter a personal TMDB API key in the extension settings, it is stored locally using Chrome’s `storage.sync` feature and is **never shared or transmitted outside your device**.

- **Anonymous API Requests**: The extension makes requests to the TMDB API to fetch movie and TV show ratings. No personally identifiable information (PII) is included in these requests.

## **3\. How We Use Your Information**

The extension only uses the data collected to:

- Identify the currently viewed movie or TV show on Netflix.

- Fetch ratings from TMDB’s public API.

- Display ratings within the Netflix interface.

**We do not track, store, sell, or share any user data with third parties.**

## **4\. Permissions Used & Justifications**

To function properly, the extension requests the following permissions:

- **activeTab**: Allows the extension to detect when a user is on a Netflix page.

- **host\_permissions** (`https://api.themoviedb.org/*`): Enables fetching ratings from TMDB.

- **scripting**: Injects ratings into the Netflix webpage.

- **storage**: Saves the user’s TMDB API key locally.

All permissions are strictly necessary for the intended functionality and are not used for tracking or unauthorized data collection.

## **5\. Data Security**

Your TMDB API key (if provided) is securely stored using Chrome's `storage.sync` feature and is **never transmitted to any server other than TMDB** for fetching ratings. We implement security measures to prevent unauthorized access to stored data.

## **6\. Third-Party Services**

This extension relies on TMDB to fetch ratings. By using this extension, you agree to TMDB’s **Privacy Policy**. This extension is not affiliated with TMDB or Netflix.

## **7\. Changes to This Privacy Policy**

We may update this Privacy Policy from time to time. Any changes will be reflected in the **Chrome Web Store listing** and within the extension’s settings page. Continued use of the extension after changes indicates your acceptance of the updated policy.
