import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Window, WindowHeader, WindowContent, Button, Frame, List, ListItem } from 'react95';
import { Computer3, Progman21, FileText, Unmute, Mail, Mshtml32534, Warning } from '@react95/icons';
import {SkillType, ProjectType } from '../types';
import { blogPosts, BlogPost } from '../data/blog';

const WindowWrapper = styled(Window)<{ $isDragging?: boolean; $x?: number; $y?: number }>`
  position: absolute;
  ${props => props.$x !== undefined && props.$y !== undefined
    ? `
      left: ${props.$x}px;
      top: ${props.$y}px;
    `
    : `
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    `
  }
  width: ${props => props.style?.width || '400px'};
  max-width: 95vw;
  max-height: 90vh;
  transition: ${props => props.$isDragging ? 'none' : 'transform 0.1s'};
  user-select: ${props => props.$isDragging ? 'none' : 'auto'};
  
  @media (max-width: 768px) {
    width: 95vw !important;
    height: auto;
    max-height: 80vh;
  }
`;

const StyledWindowHeader = styled(WindowHeader)`
  background-color: #053576;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: move;
  
  @media (max-width: 768px) {
    padding: 6px;
    
    span {
      font-size: 14px;
    }
  }
`;

const DraggableWindow: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ children, style }) => {
  const [position, setPosition] = useState<{ x?: number; y?: number }>({});
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleStart = (clientX: number, clientY: number) => {
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;

    setIsDragging(true);
    setDragStart({
      x: clientX - (position.x || rect.left),
      y: clientY - (position.y || rect.top)
    });
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;

    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;

    setPosition({ x: newX, y: newY });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Mouse Events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.window-header')) return;
    handleStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch Events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!(e.target as HTMLElement).closest('.window-header')) return;
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
    if (isDragging) {
      e.preventDefault(); // Prevent scrolling while dragging
    }
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <WindowWrapper
      ref={windowRef}
      style={style}
      $isDragging={isDragging}
      $x={position.x}
      $y={position.y}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleEnd}
    >
      {children}
    </WindowWrapper>
  );
};

const ScrollableFrame = styled(Frame)`
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.material};
    border: 1px solid ${({ theme }) => theme.borderDark};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.material};
    border: 1px solid ${({ theme }) => theme.borderDark};
    box-shadow: inset 1px 1px ${({ theme }) => theme.borderLightest},
                inset -1px -1px ${({ theme }) => theme.borderDark};
  }

  &::-webkit-scrollbar-button {
    display: block;
    height: 16px;
    width: 16px;
    background: ${({ theme }) => theme.material};
    border: 1px solid ${({ theme }) => theme.borderDark};
    box-shadow: inset 1px 1px ${({ theme }) => theme.borderLightest},
                inset -1px -1px ${({ theme }) => theme.borderDark};
  }

  &::-webkit-scrollbar-button:vertical:start {
    background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L4 8H12L8 4Z" fill="black"/></svg>');
  }

  &::-webkit-scrollbar-button:vertical:end {
    background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12L12 8H4L8 12Z" fill="black"/></svg>');
  }
`;

const ScrollableContent = styled(WindowContent)`
  max-height: calc(90vh - 60px);
  overflow-y: auto;
  
  @media (max-width: 768px) {
    max-height: calc(80vh - 50px);
    padding: 12px;
    
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const BlogScrollContent = styled(WindowContent)`
  padding: 12px;
  height: calc(100% - 33px);
  overflow-y: auto;
  background: white;

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }
  
  &::-webkit-scrollbar-track {
    background: #dfdfdf;
    border-left: 1px solid #888888;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border: 1px solid;
    border-color: #dfdfdf #808080 #808080 #dfdfdf;
  }
  
  &::-webkit-scrollbar-button:single-button {
    background: #dfdfdf;
    display: block;
    border: 1px solid;
    border-color: #dfdfdf #808080 #808080 #dfdfdf;
    height: 16px;
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    background-position: center 5px;
  }
`;

const SkillsContainer = styled.div`
  padding: 1rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled(Frame)`
  padding: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #000080;

  span {
    color: #000080;
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SkillButton = styled(Button)`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.75rem;
  cursor: default;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.material};
    transform: scale(1.02);
  }

  img {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`;

const TechButton = styled.button<{ $variant: string }>`
  padding: 6px 12px;
  border: 2px solid #dfdfdf;
  border-right-color: #000;
  border-bottom-color: #000;
  background: ${props => {
    switch(props.$variant) {
      case 'primary': return '#c3c3c3';
      case 'secondary': return '#2f8c75';
      case 'tertiary': return '#000080';
      case 'info': return '#5c9cd0';
      case 'success': return '#2ecc71';
      case 'warning': return '#e4a229';
      case 'danger': return '#e74c3c';
      default: return '#c3c3c3';
    }
  }};
  color: ${props => props.$variant === 'tertiary' ? 'white' : 'black'};
  font-family: 'ms_sans_serif';
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
  cursor: default;
  outline: none;
  box-shadow: inset 1px 1px 0px 1px #ffffff, 
              inset -1px -1px 0px 1px #868686;

  &:active {
    border: 2px solid #868686;
    border-right-color: #dfdfdf;
    border-bottom-color: #dfdfdf;
    box-shadow: inset 1px 1px 0px 1px #868686,
                inset -1px -1px 0px 1px #ffffff;
  }
`;

interface WindowManagerProps {
  openWindows: {[key: string]: boolean};
  toggleWindow: (window: string) => void;
  skills: SkillType[];
  projects: ProjectType[];
  isStartOpen: boolean;
}

const Terminal = styled.div`
  background: #000;
  color: #00ff00;
  font-family: 'DOS', 'Courier New', monospace;
  padding: 0;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  line-height: 1.2;
  font-size: 14px;
  border: none;

  &::-webkit-scrollbar {
    width: 16px;
    background: #dfdfdf;
  }

  &::-webkit-scrollbar-thumb {
    background: #c3c3c3;
    border: 2px solid #dfdfdf;
  }
`;

const CommandLine = styled.div<{ $visible: boolean }>`
  margin: 0;
  padding: 0 8px;
  white-space: pre-wrap;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s;
`;

const Prompt = styled.span`
  color: #00ff00;
`;

const Command = styled.span`
  color: #ffff00;
`;

const Output = styled.div`
  color: #00ff00;
  margin-left: 16px;
  margin-top: 4px;
`;

const SkillItem = styled.div<{ $color: string }>`
  padding: 2px 4px;
  color: ${props => props.$color};
  margin-bottom: 4px;
`;

const commands = [
  {
    command: 'echo "Welcome to my skills terminal!"',
    output: "Loading skills database..."
  },
  {
    command: 'dir /Languages',
    output: [
      { text: 'Python', color: '#ffd43b' },
      { text: 'C#', color: '#9b4f96' },
      { text: 'JavaScript', color: '#f7df1e' },
    ]
  },
  {
    command: 'dir /Frameworks',
    output: [
      { text: 'React', color: '#61dafb' },
      { text: 'Django', color: '#44B78B' },
      { text: '.NET', color: '#512bd4' },
      { text: 'Bootstrap', color: '#7952b3' },
    ]
  },
  {
    command: 'dir /Tools',
    output: [
      { text: 'Git', color: '#f05032' },
      { text: 'Linux', color: '#fcc624' },
      { text: 'PostgreSQL', color: '#336791' },
    ]
  }
];

const TerminalWindow = () => {
  const [visibleCommands, setVisibleCommands] = useState<number[]>([]);
  const [currentTyping, setCurrentTyping] = useState<{ index: number; text: string }>({ index: -1, text: '' });
  const terminalRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let currentCommandIndex = 0;
    let currentCharIndex = 0;
    let typingInterval: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentCommandIndex >= commands.length) {
        clearInterval(typingInterval);
        return;
      }

      const command = commands[currentCommandIndex].command;
      
      if (currentCharIndex === 0) {
        setVisibleCommands(prev => [...prev, currentCommandIndex]);
      }

      if (currentCharIndex < command.length) {
        setCurrentTyping({
          index: currentCommandIndex,
          text: command.substring(0, currentCharIndex + 1)
        });
        currentCharIndex++;
      } else {
        setCurrentTyping({ index: -1, text: '' });
        currentCharIndex = 0;
        currentCommandIndex++;
        
        // Scroll to bottom after command is complete
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
        
        // Delay before starting next command
        clearInterval(typingInterval);
        setTimeout(() => {
          typingInterval = setInterval(typeNextCharacter, 50);
        }, 500);
      }
    };

    typingInterval = setInterval(typeNextCharacter, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <Terminal ref={terminalRef}>
      <CommandLine $visible={true}>
        <Prompt>Microsoft Windows [Version 10.0.19045.3803]</Prompt>
      </CommandLine>
      <CommandLine $visible={true}>
        <Prompt>(c) Agustin P. All rights reserved.</Prompt>
      </CommandLine>
      {commands.map((cmd, index) => (
        <React.Fragment key={index}>
          <CommandLine $visible={visibleCommands.includes(index)}>
            <Prompt>C:\Skills&gt;</Prompt>
            {currentTyping.index === index ? (
              <Command>{currentTyping.text}</Command>
            ) : (
              <Command>{visibleCommands.includes(index) ? cmd.command : ''}</Command>
            )}
          </CommandLine>
          <CommandLine $visible={visibleCommands.includes(index) && currentTyping.index !== index}>
            {Array.isArray(cmd.output) ? (
              <Output>
                {cmd.output.map((item, i) => (
                  <SkillItem key={i} $color={item.color}>
                    {item.text}
                  </SkillItem>
                ))}
              </Output>
            ) : (
              <Output>{cmd.output}</Output>
            )}
          </CommandLine>
        </React.Fragment>
      ))}
    </Terminal>
  );
};

const BlogIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100px;
  text-align: center;
`;

const BlogIconText = styled.span`
  margin-top: 8px;
  font-size: 11px;
  font-family: ms_sans_serif;
  word-break: break-word;
`;

const WindowManager: React.FC<WindowManagerProps> = ({
  openWindows,
  toggleWindow,
  skills,
  projects,
  isStartOpen
}) => {
  const [currentPost, setCurrentPost] = React.useState<BlogPost | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Cerrar todas las ventanas excepto la que se está abriendo
  React.useEffect(() => {
    const openWindowKeys = Object.entries(openWindows)
      .filter(([_, isOpen]) => isOpen)
      .map(([key]) => key);

    if (openWindowKeys.length > 1) {
      openWindowKeys.forEach(key => {
        if (key !== openWindowKeys[openWindowKeys.length - 1]) {
          toggleWindow(key);
        }
      });
    }
  }, [openWindows, toggleWindow]);

  return (
    <>
      {openWindows.about && (
        <DraggableWindow>
          <StyledWindowHeader className="window-header">
            <span>About Me.txt</span>
            <Button onClick={() => toggleWindow('about')}>
              <span>×</span>
            </Button>
          </StyledWindowHeader>
          <ScrollableContent>
            <Frame variant="field" className="field" style={{ padding: '1.5rem', marginBottom: '1rem' }}>
              <h2 style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#000080' // Color azul típico de Windows 95
              }}>
                Hi, I am Agustín 
              </h2>
              <p style={{ 
                marginTop: '1rem',
                fontSize: '1.4rem',
                fontWeight: 'bold',
                color: '#000080',
                borderBottom: '2px solid #000080',
                paddingBottom: '0.5rem',
                marginBottom: '1rem'
              }}>
                Software Engineer
              </p>
              <p style={{ marginTop: '1rem' }}>
                Hello and welcome to my portfolio! I find myself deeply passionate about technology and the open-source community.
              </p>
              <p style={{ marginTop: '1rem' }}>
                I'm fascinated by the innate creative potential we all have, and even more inspired by how we, as software engineers, can develop technologies that advance and benefit humanity for the better.
              </p>
            </Frame>
          </ScrollableContent>
        </DraggableWindow>
      )}

      {openWindows.projects && (
        <DraggableWindow style={{ 
          width: '450px',
          maxWidth: '95vw',
          margin: '20px auto'
        }}>
          <StyledWindowHeader className="window-header">
            <span>Projects.exe</span>
            <Button onClick={() => toggleWindow('projects')}>
              <span>×</span>
            </Button>
          </StyledWindowHeader>
          <ScrollableContent style={{
            padding: '8px',
            maxHeight: '70vh',
            overflowY: 'auto'
          }}>
            {projects.map((project, index) => (
              <Frame
                key={index}
                variant="field"
                style={{ 
                  padding: '8px', 
                  marginBottom: '8px',
                  height: '160px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <h3 style={{ 
                  margin: '0 0 8px 0',
                  color: '#000080',
                  borderBottom: '2px solid #000080',
                  paddingBottom: '4px',
                  fontSize: '14px'
                }}>
                  {project.name}
                </h3>
                <p style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '12px',
                  flexGrow: 1
                }}>{project.description}</p>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '4px'
                }}>
                  {project.technologies.map((tech, techIndex) => {
                    let variant = 'primary';
                    
                    if (['Python', 'Django', 'Flask'].includes(tech)) {
                      variant = 'info';
                    } else if (['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'].includes(tech)) {
                      variant = 'danger';
                    } else if (['JavaScript', 'React', 'Node.js'].includes(tech)) {
                      variant = 'warning';
                    } else if (['Bootstrap', 'CSS', 'HTML'].includes(tech)) {
                      variant = 'success';
                    } else if (['OpenCV', 'Mediapipe'].includes(tech)) {
                      variant = 'secondary';
                    } else if (['Amazon Rekognition', 'AWS'].includes(tech)) {
                      variant = 'tertiary';
                    }

                    return (
                      <TechButton
                        key={techIndex}
                        $variant={variant}
                        style={{ 
                          fontSize: '13px', 
                          padding: '4px 8px',
                          height: 'auto',
                          margin: '1px'
                        }}
                      >
                        {tech}
                      </TechButton>
                    );
                  })}
                </div>
              </Frame>
            ))}
          </ScrollableContent>
        </DraggableWindow>
      )}

      {openWindows.skills && (
        <DraggableWindow style={{ 
          width: '800px', 
          height: '600px', 
          maxWidth: '95vw', 
          maxHeight: '90vh',
          margin: 'auto'
        }}>
          <StyledWindowHeader className="window-header">
            <span>Skills.cmd</span>
            <Button onClick={() => toggleWindow('skills')}>
              <span>×</span>
            </Button>
          </StyledWindowHeader>
          <WindowContent style={{ 
            padding: 0, 
            margin: 0, 
            height: 'calc(100% - 33px)',
            overflow: 'hidden'
          }}>
            <TerminalWindow />
          </WindowContent>
        </DraggableWindow>
      )}

      {openWindows.contact && (
        <DraggableWindow>
          <StyledWindowHeader className="window-header">
            <span>Contact.exe</span>
            <Button onClick={() => toggleWindow('contact')}>
              <span>×</span>
            </Button>
          </StyledWindowHeader>
          <ScrollableContent>
            <Frame variant="field" style={{ padding: '1rem' }}>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail variant="32x32_4" />
                <p>Email: <a href="mailto:agustin.swe@gmail.com">agustin.swe@gmail.com</a></p>
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mshtml32534 variant="32x32_4" />
                <p>LinkedIn: <a href="https://www.linkedin.com/in/agustin-p-3b544432a" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/agustin-p-3b544432a</a></p>
              </div>
            </Frame>
          </ScrollableContent>
        </DraggableWindow>
      )}

      {openWindows.blog && (
        <DraggableWindow style={{ 
          width: '500px', 
          height: 'auto',
          maxWidth: '95vw',
          margin: '20px auto'
        }}>
          <StyledWindowHeader>
            <span style={{ fontFamily: 'ms_sans_serif' }}>Blog.txt</span>
            <div style={{ display: 'flex', gap: '2px' }}>
              <Button onClick={() => toggleWindow('blog')}>
                <span>×</span>
              </Button>
            </div>
          </StyledWindowHeader>
          <div style={{ 
            background: '#c0c0c0',
            borderBottom: '1px solid #868686',
            padding: '2px 6px',
            display: 'flex',
            gap: '16px'
          }}>
            <span style={{ fontFamily: 'ms_sans_serif' }}>File</span>
            <span style={{ fontFamily: 'ms_sans_serif' }}>Edit</span>
            <span style={{ fontFamily: 'ms_sans_serif' }}>Help</span>
          </div>
          <div style={{
            padding: '8px 16px',
            borderBottom: '1px solid #848584',
            background: 'white'
          }}>
            <p style={{ 
              textAlign: 'center',
              color: '#000080',
              fontSize: '14px',
              margin: 0
            }}>
              Select a project from the left to read its story
            </p>
          </div>
          <WindowContent style={{
            background: 'white',
            padding: '16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
            gap: '16px',
            justifyItems: 'center',
            maxHeight: '300px',
            '@media (max-width: 480px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
              padding: '8px',
              gap: '8px'
            }
          }}>
            {blogPosts.map((post, index) => {
              let Icon;
              switch (post.project) {
                case 'Che-Entende':
                  Icon = Unmute;
                  break;
                case 'Smells Fishy':
                  Icon = Warning;
                  break;
                case 'Fierros & Bids':
                  Icon = Progman21;
                  break;
                default:
                  Icon = FileText;
              }
              
              return (
                <BlogIconWrapper
                  key={index}
                  onClick={() => setCurrentPost(post)}
                >
                  <Icon variant="32x32_4" />
                  <BlogIconText>
                    {post.project}.txt
                  </BlogIconText>
                </BlogIconWrapper>
              );
            })}
          </WindowContent>
        </DraggableWindow>
      )}

      {currentPost && (
        <DraggableWindow style={{ 
          width: '600px', 
          height: '500px', 
          maxWidth: '95vw',
          maxHeight: '90vh',
          margin: '20px auto'
        }}>
          <StyledWindowHeader className="window-header">
            <span style={{ fontFamily: 'ms_sans_serif' }}>Blog.exe</span>
            <Button onClick={() => setCurrentPost(null)}>
              <span>×</span>
            </Button>
          </StyledWindowHeader>
          <BlogScrollContent>
            <h2 style={{
              color: '#000080',
              fontFamily: 'ms_sans_serif',
              fontSize: '20px',
              marginBottom: '12px',
              paddingBottom: '6px',
              borderBottom: '1px solid #000080'
            }}>
              {currentPost.title}
            </h2>
            <div
              style={{
                fontFamily: 'ms_sans_serif',
                lineHeight: '1.4',
                whiteSpace: 'normal',
                textAlign: 'justify',
                fontSize: '14px'
              }}
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />
          </BlogScrollContent>
        </DraggableWindow>
      )}

      {isStartOpen && (
        <List
          style={{
            position: 'absolute',
            left: '0',
            bottom: '100%',
            width: '200px'
          }}
        >
          <ListItem onClick={() => window.location.reload()}>
            <Computer3 variant="16x16_4" style={{ marginRight: 8 }} />
            Restart...
          </ListItem>
        </List>
      )}
    </>
  );
};

export default WindowManager;