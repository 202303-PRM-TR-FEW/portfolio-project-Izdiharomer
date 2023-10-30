import React, { Component } from 'react';
import Image from 'next/image';

class EmailCopyButton extends Component {
  state = {
    isCopied: false,
  };

  copyEmailToClipboard = () => {
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:ezdiharomerrrr@gmail.com';

    if (emailLink) {
      const email = emailLink.href.substring(7);
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      // Show the "Copied" message
      this.setState({ isCopied: true });

      // Hide the "Copied" message after a brief delay (e.g., 3 seconds)
      setTimeout(() => {
        this.setState({ isCopied: false });
      }, 3000);
    }
  };

  render() {
    return (
      <div className='flex flex-row justify-between items-between gap-4'>
        <p>
         {' '}
          <a href="mailto:ezdiharomerrrr@gmail.com">ezdiharomerrrr@gmail.com</a>
        </p>
        <button onClick={this.copyEmailToClipboard}>                    
          <Image src='/assets/contacts/copy.svg' width={25} height={25} alt='copy.svg' className='w-[20px] h-[20px] bg-[#fff] rounded-full m-1'/>
        </button>
        {this.state.isCopied && <span>Copied</span>}
      </div>
    );
  }
}

export default EmailCopyButton;
