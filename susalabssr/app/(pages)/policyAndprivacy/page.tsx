import { redirect } from 'next/navigation';

// Redirect old route to new route
export default function PolicyAndPrivacyRedirect() {
    redirect('/privacy-policy');
}
