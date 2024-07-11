import React from 'react'
import { MDXProvider } from '@mdx-js/react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {}
interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
interface ListProps
  extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {}
interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {}

const components = {
  h1: (props: HeadingProps) => (
    <h1 className={'text-size-big-title mb-2 font-extrabold'} {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2 className={'text-size-medium-title mb-2 font-bold'} {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className={'text-size-medium-title mb-2 font-bold'} {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className={'text-size-medium-title mb-2 font-bold'} {...props} />
  ),
  h5: (props: HeadingProps) => (
    <h5 className={'text-size-medium-title mb-2 font-bold'} {...props} />
  ),
  h6: (props: HeadingProps) => (
    <h6 className={'text-size-medium-title mb-2 font-bold'} {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className={'text-size-body tracking-wide leading-loose'} {...props} />
  ),
  span: (props: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={'text-size-body'} {...props} />
  ),
  a: (props: AnchorProps) => (
    <a className={'text-[#0064FF] hover:underline'} {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className={'list-disc list-inside leading-loose'} {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className={'list-decimal list-inside leading-loose'} {...props} />
  ),
  li: (props: ListItemProps) => <li className={'ml-4'} {...props} />,
}

export default function MarkDownProvider({
  children,
}: {
  children: React.JSX.Element
}) {
  return (
    <div className={'w-full border-b-[1px] pb-5 mb-6'}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  )
}
