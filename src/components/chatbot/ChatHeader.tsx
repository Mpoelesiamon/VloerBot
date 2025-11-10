
interface ChatHeaderProps {
  onClose: () => void;
  profileImage?: string;
}

const ChatHeader = ({ onClose, profileImage }: ChatHeaderProps) => {
  return (
    <div className="bg-[#d5803f] text-white px-4 py-3 flex items-center justify-between">
      {profileImage ? (
        <img 
          src={profileImage} 
          alt="Chatbot Logo" 
          className="h-10 w-auto object-contain"
          style={{ 
            maxHeight: '40px', 
            maxWidth: 'none',
            width: 'auto', 
            height: 'auto', 
            objectFit: 'contain',
            display: 'block'
          }}
        />
      ) : (
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">
          VB
        </div>
      )}
      
      <button
        onClick={onClose}
        className="text-white flex items-center justify-center cursor-pointer"
        style={{ 
          fontFamily: 'Crimson Pro, serif', 
          fontSize: '32px',
          fontWeight: 400,
          background: 'transparent',
          backgroundColor: 'transparent',
          border: 'none',
          outline: 'none',
          padding: 0,
          lineHeight: 1,
          width: 'auto',
          height: 'auto'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.opacity = '1';
        }}
      >
        ×
      </button>
    </div>
  );
};

export default ChatHeader;
