/* eslint-disable @typescript-eslint/no-unused-vars */
import { PostContentContainer } from './styles';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Import Dracula style

interface IPostContentProps {
  content: string;
}

export function PostContent({ content }: IPostContentProps) {
  return (
    <>
      <PostContentContainer>
        <ReactMarkdown
          children={content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={dracula}
                  language={match[1]}
                  PreTag='div'
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </PostContentContainer>
    </>
  );
}
