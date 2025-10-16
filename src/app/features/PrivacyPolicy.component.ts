import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-PrivacyPolicy',
  imports: [SharedModule],
  template: `
    <div class="container container py-2 px-4 border-secondary">
      <div class="col text-grey-blue">
        <h1 class="h1 text-darkblue ff-source-serif-semi-bold border-heading">
          {{ 'PrivacyPolicy' | translate }}
        </h1>

        <p class="text-justify">
          At sathyasaiodisha.org ("we," "us," or "our"), we are committed to
          protecting your privacy and ensuring the security of any personal
          information you provide while using our website. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website, sathyasaiodisha.org (the "Website").
          Please read this policy carefully. By accessing or using the Website,
          you agree to the terms of this Privacy Policy. If you do not agree,
          please do not use the Website.
        </p>
        <p>
          We may collect personal information you provide when you fill out
          forms, subscribe to newsletters, register for events, or contact us.
          This may include personal details such as Name, Email address, Phone
          number, Mailing address or any other information you choose to provide
          and non-personal details like IP address, Browser type, Operating
          system, Referring URLs, Pages viewed and time spent on the Website.
        </p>
        <p>We may use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide and improve our Website’s services and content</li>
          <li>To respond to your inquiries, comments, or requests</li>
          <li>
            To send you newsletters, updates, or event information (if you have
            opted in)
          </li>
          <li>To analyze Website usage and improve user experience</li>
          <li>To prevent fraud or misuse of the Website</li>
        </ul>
        <p>
          We may share your information with trusted third-party service
          providers who assist us in operating the Website, such as hosting
          providers, analytics services, or email service providers. Further we
          may disclose your information if required by law, such as in response
          to a court order or other statutory or legal process.
        </p>
        <p>
          We may use cookies and similar technologies those are necessary for
          the Website to function properly, help us analyze Website performance
          and usage. You can manage cookie preferences through your browser
          settings. Disabling cookies may affect the functionality of certain
          parts of the Website.
        </p>
        <p>
          For further queries, you may reach us at:
          <a href="email:info@sathyasaiodisha.org"
            >info&#64;sathyasaiodisha.org</a
          >
        </p>
      </div>
    </div>
  `,
})
export class PrivacyPolicyComponent implements OnInit {
  ngOnInit(): void {}
}
