# Analytics Setup Guide
## Key West Blue Crab Food Truck

### **Overview**
This guide will help you set up comprehensive analytics to track website performance, user behavior, and Google Ads conversions.

---

## **STEP 1: SET UP GOOGLE ANALYTICS 4 (GA4)**

### **1.1 Create GA4 Property**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Start measuring"
3. Enter property name: "Key West Blue Crab"
4. Select timezone: Eastern Time
5. Choose industry: "Food and Drink"
6. Select business size: "Small business"

### **1.2 Get Your Measurement ID**
- After setup, you'll get a Measurement ID like: `G-XXXXXXXXXX`
- Copy this ID - you'll need it for the next steps

### **1.3 Update Your Website**
Replace `GA_MEASUREMENT_ID` in your `layout.tsx` file with your actual Measurement ID:

```tsx
// In src/app/layout.tsx, replace GA_MEASUREMENT_ID with your actual ID
src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
```

---

## **STEP 2: SET UP CONVERSION TRACKING**

### **2.1 Track Online Orders**
**Goal Type**: Custom Event
**Event Name**: `purchase`
**Trigger**: When someone completes an order on your Square site

**Setup Steps**:
1. In GA4, go to Configure → Events
2. Click "Create Event"
3. Event name: `purchase`
4. Parameter: `value` (order amount)
5. Parameter: `currency` (USD)

### **2.2 Track Phone Calls**
**Goal Type**: Custom Event
**Event Name**: `phone_call`
**Trigger**: When someone clicks your phone number

**Setup Steps**:
1. In GA4, go to Configure → Events
2. Click "Create Event"
3. Event name: `phone_call`
4. Parameter: `contact_method` (phone)

### **2.3 Track Menu Views**
**Goal Type**: Custom Event
**Event Name**: `view_menu`
**Trigger**: When someone visits your menu page

---

## **STEP 3: GOOGLE ADS INTEGRATION**

### **3.1 Link GA4 to Google Ads**
1. In GA4, go to Admin → Property → Google Ads linking
2. Click "Link"
3. Select your Google Ads account
4. Enable "Import site metrics"
5. Enable "Import conversions"

### **3.2 Set Up Conversion Actions**
1. In Google Ads, go to Tools → Conversions
2. Click "Add conversion action"
3. Import from GA4:
   - `purchase` (online orders)
   - `phone_call` (phone calls)
   - `view_menu` (menu engagement)

---

## **STEP 4: KEY METRICS TO TRACK**

### **4.1 Traffic Metrics**
- **Sessions**: Total website visits
- **Users**: Unique visitors
- **Pageviews**: Total pages viewed
- **Bounce Rate**: % of single-page visits
- **Session Duration**: Average time on site

### **4.2 Conversion Metrics**
- **Conversion Rate**: % of visitors who order/call
- **Cost Per Conversion**: Ad spend per order
- **Revenue**: Total sales from website
- **ROAS**: Return on ad spend

### **4.3 User Behavior Metrics**
- **Pages per Session**: How many pages visitors view
- **Top Landing Pages**: Which pages bring most traffic
- **Exit Pages**: Where visitors leave your site
- **User Flow**: How visitors navigate your site

---

## **STEP 5: SET UP DASHBOARDS**

### **5.1 Main Dashboard**
Create a dashboard with these widgets:
- **Traffic Overview**: Sessions, users, pageviews
- **Conversion Summary**: Orders, phone calls, revenue
- **Top Traffic Sources**: Google Ads, organic, social
- **Popular Pages**: Homepage, menu, contact
- **Device Performance**: Mobile vs desktop

### **5.2 Google Ads Dashboard**
Create a dashboard specifically for ad performance:
- **Campaign Performance**: Clicks, impressions, CTR
- **Conversion Tracking**: Orders, calls, cost per conversion
- **Keyword Performance**: Top performing keywords
- **Audience Insights**: Demographics, interests

---

## **STEP 6: AUTOMATED REPORTS**

### **6.1 Weekly Report**
Set up automated weekly email with:
- Website traffic summary
- Conversion performance
- Top traffic sources
- Google Ads performance
- Recommendations for improvement

### **6.2 Monthly Report**
Comprehensive monthly analysis:
- Traffic trends
- Conversion rate changes
- ROI analysis
- Competitive insights
- Strategic recommendations

---

## **STEP 7: ADVANCED TRACKING**

### **7.1 Enhanced E-commerce**
Track detailed order information:
- Product performance (crab cakes, steamed crabs, etc.)
- Order value distribution
- Seasonal trends
- Customer lifetime value

### **7.2 User Engagement**
Track how users interact with your site:
- Scroll depth on pages
- Button clicks
- Form interactions
- Video views (if you add videos)

---

## **STEP 8: MOBILE OPTIMIZATION TRACKING**

### **8.1 Mobile Performance**
Since food truck customers often order on mobile:
- Mobile vs desktop conversion rates
- Mobile page load speed
- Mobile user experience metrics
- Mobile-specific conversion funnels

---

## **STEP 9: LOCAL SEO TRACKING**

### **9.1 Local Search Performance**
Track local search effectiveness:
- "Near me" searches
- Local keyword performance
- Geographic traffic patterns
- Local business listing performance

---

## **STEP 10: COMPETITIVE ANALYSIS**

### **10.1 Market Insights**
Use GA4 to understand your market:
- Traffic patterns by time of day
- Seasonal trends
- Customer behavior patterns
- Conversion optimization opportunities

---

## **QUICK REFERENCE: KEY REPORTS**

### **Daily Monitoring**
- Real-time visitors
- Today's conversions
- Ad performance

### **Weekly Analysis**
- Traffic trends
- Conversion rates
- Top content
- Ad optimization

### **Monthly Review**
- Overall performance
- ROI analysis
- Strategic planning
- Budget allocation

---

## **TROUBLESHOOTING**

### **Common Issues**
1. **Tracking not working**: Check Measurement ID
2. **Conversions not showing**: Verify event setup
3. **Data discrepancies**: Check timezone settings
4. **Slow loading**: Optimize tracking code

### **Support Resources**
- [GA4 Help Center](https://support.google.com/analytics)
- [Google Ads Help](https://support.google.com/google-ads)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)

---

## **NEXT STEPS**

1. **Set up GA4** following Step 1
2. **Get your Measurement ID** and update the website
3. **Set up conversion tracking** for orders and calls
4. **Link to Google Ads** for campaign optimization
5. **Create dashboards** for easy monitoring
6. **Set up automated reports** for regular insights

---

*This analytics setup will give you complete visibility into your website performance and Google Ads ROI.*
