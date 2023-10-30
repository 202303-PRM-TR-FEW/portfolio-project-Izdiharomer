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

      this.setState({ isCopied: true });

      setTimeout(() => {
        this.setState({ isCopied: false });
      }, 2000);
    }
  };

  render() {
    return (
      <div className='flex flex-row justify-between items-between gap-4'>
        <p className='flex flex-row'>
         {' '}
          <Image src='/assets/mail.svg' width={25} height={25} alt='mail.svg' className='w-[20px] h-[20px] bg-[#fff] rounded-full m-1'/> 
          <a href="mailto:ezdiharomerrrr@gmail.com">ezdiharomerrrr@gmail.com</a>
        </p>
        <button onClick={this.copyEmailToClipboard}>                    
          <Image src='/assets/contacts/copy.svg' width={25} height={25} alt='copy.svg' className='w-[20px] h-[20px] bg-[#fff] rounded-full m-1'/>
        </button>
        {this.state.isCopied && <span className='text-sm'>Copied</span> }
      </div>
    );
  }
}

export default EmailCopyButton;

