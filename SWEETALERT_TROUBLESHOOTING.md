# 🔧 SweetAlert2 Troubleshooting Guide

## ✅ Your Setup

Your EmailJS credentials are configured:
- Service ID: `service_rt70ogh`
- Template ID: `template_5m9hadd`
- Public Key: `9LKw_YP2kaRKOTbv6`

---

## 🧪 Testing Steps

### Step 1: Test Toast Button
1. Go to `/contact` page
2. Look for "Test Toast Notification" button under the heading
3. Click it
4. You should see a success toast in the top-right corner

**If toast appears:** SweetAlert2 is working! ✅
**If toast doesn't appear:** See troubleshooting below

---

### Step 2: Test Form Submission
1. Fill out all required fields:
   - Full Name
   - Email Address
   - Subject
   - Message
2. Click "Send Message"
3. Check browser console (F12) for logs
4. Watch for toast notification

---

## 🐛 Common Issues & Fixes

### Issue 1: Toast Doesn't Appear at All

**Possible Causes:**
- SweetAlert2 not loaded
- CSS conflicts
- Z-index issues

**Fix:**
```bash
# Reinstall SweetAlert2
npm uninstall sweetalert2
npm install sweetalert2 --legacy-peer-deps

# Restart dev server
npm run dev
```

---

### Issue 2: Toast Appears But Wrong Position

**Check:**
- Browser zoom level (should be 100%)
- Window size
- Other fixed elements

**Fix:**
The toast uses `position: "top-end"` which is top-right corner.

---

### Issue 3: EmailJS Error

**Check Console For:**
- "EmailJS not configured" → Environment variables issue
- "Network error" → Internet connection
- "Invalid credentials" → Wrong EmailJS keys

**Verify EmailJS:**
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check Service is connected
3. Check Template exists
4. Verify Public Key in Account settings

---

### Issue 4: Form Submits But No Toast

**Check:**
1. Open browser console (F12)
2. Look for console.log messages:
   - "Form submitted"
   - "Sending email via EmailJS..."
   - "Showing success toast..." or "Showing error toast..."

**If you see logs but no toast:**
- Clear browser cache
- Try incognito/private mode
- Check for ad blockers

---

## 🔍 Debug Checklist

Run through this checklist:

- [ ] Dev server is running (`npm run dev`)
- [ ] Page loaded without errors (check console)
- [ ] SweetAlert2 is installed (check package.json)
- [ ] Environment variables are set (.env.local exists)
- [ ] Browser console is open (F12)
- [ ] No ad blockers interfering
- [ ] Browser zoom is 100%
- [ ] Tried clicking "Test Toast" button

---

## 📝 Console Logs to Check

When you submit the form, you should see:

```
Form submitted
Environment variables: {serviceId: "Set", templateId: "Set", publicKey: "Set"}
Sending email via EmailJS...
EmailJS response: {status: 200, text: "OK"}
Showing success toast...
```

**If you see different logs, note them down.**

---

## 🎯 Quick Test

Open browser console and paste this:

```javascript
import('sweetalert2').then(Swal => {
  Swal.default.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Test Toast',
    showConfirmButton: false,
    timer: 3000
  });
});
```

**If this works:** SweetAlert2 is installed correctly.
**If this fails:** Reinstall SweetAlert2.

---

## 🔄 Complete Reset

If nothing works, try this:

```bash
# 1. Stop dev server (Ctrl+C)

# 2. Remove node_modules and package-lock
rm -rf node_modules package-lock.json

# 3. Reinstall everything
npm install --legacy-peer-deps

# 4. Restart dev server
npm run dev
```

---

## 📞 Still Not Working?

Check these:

1. **Browser Console Errors:**
   - Any red errors?
   - Any warnings about SweetAlert2?

2. **Network Tab:**
   - Is EmailJS API being called?
   - What's the response status?

3. **Elements Tab:**
   - Search for "swal2" in the DOM
   - Is the toast element being created?

---

## ✅ Expected Behavior

### Success Flow:
1. User fills form
2. Clicks "Send Message"
3. Button shows "Sending..." with spinner
4. EmailJS sends email
5. Success toast appears (top-right)
6. Toast auto-dismisses after 4 seconds
7. Form clears

### Error Flow:
1. User fills form
2. Clicks "Send Message"
3. Button shows "Sending..." with spinner
4. EmailJS fails (network/credentials)
5. Error toast appears (top-right)
6. Toast auto-dismisses after 4 seconds
7. Form stays filled

---

## 🎨 Toast Appearance

**Success Toast:**
```
┌─────────────────────────────┐
│ ✓  Message sent successfully!│
│    We'll get back to you soon│
└─────────────────────────────┘
  ▓▓▓▓▓▓▓▓░░░░░░░░  (progress)
```

**Colors:**
- Background: Dark navy (#1A3263)
- Text: White
- Icon: Teal (#17A891)
- Progress: Teal (#17A891)

---

## 📧 EmailJS Template Check

Make sure your EmailJS template has these variables:

```
Subject: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}
```

**Variable names must match exactly!**

---

## 🚀 Next Steps

1. Click "Test Toast" button on contact page
2. Check if toast appears
3. If yes, try submitting the form
4. Check console for any errors
5. Report back what you see!

---

## 💡 Tips

- Keep browser console open while testing
- Try in incognito mode to rule out extensions
- Check if other websites with popups work
- Verify no popup blockers are active
- Make sure JavaScript is enabled
